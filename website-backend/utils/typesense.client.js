require("dotenv").config({ path: "./.env" });
const Typesense = require("typesense");

const typesense_client = new Typesense.Client({
  nodes: [{ host: process.env.TYPESENSE_HOST, port: process.env.TYPESENSE_PORT, protocol: process.env.TYPESENSE_PROTOCOL }],
  apiKey: process.env.TYPESENSE_API_KEY,
  connectionTimeoutSeconds: 6,
});

module.exports = typesense_client;
