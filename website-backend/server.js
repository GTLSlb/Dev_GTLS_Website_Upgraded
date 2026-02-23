// env variables
require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");

const connection = require("./database/connection");
const strapi_connection = require("./database/strapi.connection");
const { initializeConnection } = require("./utils/connection.utils");

const cookie_parser = require("cookie-parser");
const authenticate = require("./middleware/auth.middleware");

// Import the routes
const authRoutes = require("./routes/auth.route");
const uploadRoutes = require("./routes/upload.route");
const typesenseRoutes = require("./routes/typesense.route");

// Initialize server
const app = express();

// Configuration
const logger = require("./shared-utils/logging");
const { getSearchableFields } = require("./utils/typesense.utils");
const port = process.env.PORT || 3000;

// Connect to MySQL
initializeConnection(connection);

// Connect to Strapi
initializeConnection(strapi_connection);


app.set("trust proxy", 1);

// Middleware

// 1- Cookie Parser
app.use(cookie_parser());

app.use(
  cors({
    origin: ["https://gtrr.gtls.com.lb", "http://localhost:3000", "https://web-test-api.gtls.store", "https://web-test.gtls.store", "https://gtrr-api.gtls.com.lb"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 3- Body Parser
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

// 4- Logger Middleware
app.use((req, res, next) => {
  logger.info(`[${req.method}] ${req.url}`);
  next();
});

// 5- Set up CSRF protection
const generateCsrfToken = (req, res, next) => {
  req.csrfToken = () => res.locals.csrfToken;
  next();
}
app.use(generateCsrfToken);

// Routes
app.use(authRoutes);
app.use(typesenseRoutes);
app.use(authenticate, uploadRoutes);

// Start the server
app.listen(port, async () => {
  // Warm up the Typesense cache before the server even accepts requests
  logger.info("Warming up Typesense schema cache...");
  await getSearchableFields();

  logger.info(`server is running on port ${port}...`);
});

// Collect Errors
app.all("/*splat", (req, res, next) => {
  const fullUrl = `${req.protocol}://${req.headers.host}${req.baseUrl}${req.originalUrl}`;
  // next(new ServerError(`Can't find ${req.originalUrl} on this server!`, 404))
});

module.exports = app;
