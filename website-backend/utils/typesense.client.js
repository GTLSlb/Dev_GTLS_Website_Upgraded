require("dotenv").config({ path: "./.env" });
const Typesense = require("typesense");

const typesense_client = new Typesense.Client({
  // 1. Connect to a Typesense server
  nodes: [
    {
      host: process.env.TYPESENSE_HOST,
      // port: process.env.TYPESENSE_PORT,
      protocol: process.env.TYPESENSE_PROTOCOL,
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY,

  // 2. Retry strategy for network blips
  connectionTimeoutSeconds: 300,
  numRetries: 3,
  retryIntervalSeconds: 2,

  // 3. Handle large payloads gracefully
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
  additionalHeaders: {
    Connection: "close",
  },
});

module.exports = typesense_client;
