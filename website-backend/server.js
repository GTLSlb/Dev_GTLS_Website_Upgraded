// env variables
require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const csurf = require("csurf");

const cookie_parser = require("cookie-parser");
const connection = require("./database/connection");
const authenticate = require("./middleware/auth.middleware");

// Import the routes
const authRoutes = require("./routes/auth.route");
const uploadRoutes = require("./routes/upload.route");

// Initialize server
const app = express();

// Configuration
const logger = require("./shared-utils/logging");
const port = process.env.PORT || 3000;

// DB connection re-try logic
const MAX_RETRIES = 3;
const RETRY_DELAY = 3000;

// Connect to MySQL
async function connectWithRetry(retryCount = 0) {
  try {
    console.log(`🔄 Attempting to connect to MySQL database... (Attempt ${retryCount + 1}/${MAX_RETRIES})`);
    console.log("Connection config:", {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    // Test the connection pool
    connection.getConnection((err, conn) => {
      if (err) {
        logger.error("❌ Error connecting to MySQL: " + err.message);
        console.error("❌ Error connecting to MySQL:");
        console.error("  Error Message:", err.message);
        console.error("  Error Code:", err.code);
        console.error("  Error Number:", err.errno);
        console.error("  SQL State:", err.sqlState);
        console.error("  Fatal:", err.fatal);
        console.error("\n  Connection Config:");
        console.error("    Host:", process.env.DB_HOST);
        console.error("    User:", process.env.DB_USER);
        console.error("    Database:", process.env.DB_NAME);
        console.error("    Port:", process.env.DB_PORT || 3306);

        // Retry logic
        if (retryCount < MAX_RETRIES - 1) {
          console.log(`⏳ Retrying in ${RETRY_DELAY / 1000} seconds...`);
          setTimeout(() => {
            connectWithRetry(retryCount + 1);
          }, RETRY_DELAY);
        } else {
          console.error("❌ Max retries reached. Could not connect to database.");
          logger.error("❌ Max retries reached. Could not connect to database.");
          // Optionally exit or let PM2 restart
          // process.exit(1);
        }
        return;
      }

      // Connection successful
      console.log("✅ Successfully connected to MySQL database");
      logger.info("✅ Successfully connected to MySQL database");
      conn.release(); // Release the connection back to the pool
    });

  } catch (err) {
    logger.error("❌ Exception while connecting to MySQL: " + err.message);
    console.error("❌ Exception caught during MySQL connection:");
    console.error(err);

    // Retry on exception
    if (retryCount < MAX_RETRIES - 1) {
      console.log(`⏳ Retrying in ${RETRY_DELAY / 1000} seconds...`);
      setTimeout(() => {
        connectWithRetry(retryCount + 1);
      }, RETRY_DELAY);
    } else {
      console.error("❌ Max retries reached. Could not connect to database.");
      logger.error("❌ Max retries reached. Could not connect to database.");
    }
  }
}

// Initialize connection with retry
connectWithRetry();

// Handle connection errors after initial connection
connection.on("error", (err) => {
  logger.error("Database connection error: " + err.message);
  console.error("⚠️  Database connection error:");
  console.error("   Code:", err.code);
  console.error("   Message:", err.message);

  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.error("   Status: Database connection was closed.");
    console.log("🔄 Attempting to reconnect...");
    connectWithRetry();
  }
  if (err.code === "ER_CON_COUNT_ERROR") {
    console.error("   Status: Database has too many connections.");
  }
  if (err.code === "ECONNREFUSED") {
    console.error("   Status: Database connection was refused.");
    console.log("🔄 Attempting to reconnect...");
    connectWithRetry();
  }
  if (err.code === "ETIMEDOUT") {
    console.error("   Status: Database connection timed out.");
    console.log("🔄 Attempting to reconnect...");
    connectWithRetry();
  }
});

app.set("trust proxy", 1);

// Middleware

// 1- Cookie Parser
app.use(cookie_parser());

app.use(
  cors({
    origin: ["https://gtrr.gtls.com.lb", "http://localhost:3000"],
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
// const generateCsrfToken = (req, res, next) => {
//   req.csrfToken = () => res.locals.csrfToken;
//   next();
// };
// app.use(generateCsrfToken);

// Routes
app.use(authRoutes);
app.use(authenticate, uploadRoutes);

// Start the server
app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});

// Collect Errors
app.all("/*splat", (req, res, next) => {
  const fullUrl = `${req.protocol}://${req.headers.host}${req.baseUrl}${req.originalUrl}`;
  // next(new ServerError(`Can't find ${req.originalUrl} on this server!`, 404))
});

module.exports = app;
