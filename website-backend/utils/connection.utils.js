const logger = require("../shared-utils/logging");

// DB connection re-try logic
const MAX_RETRIES = 3;
const RETRY_DELAY = 3000;

async function connectWithRetry(connection, retryCount = 0) {
  try {
    console.log(
      `🔄 Attempting to connect to MySQL database... (Attempt ${
        retryCount + 1
      }/${MAX_RETRIES})`
    );
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
          console.error(
            "❌ Max retries reached. Could not connect to database."
          );
          logger.error(
            "❌ Max retries reached. Could not connect to database."
          );
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

async function initializeConnection(connection) {
  
  try{
    // Initialize connection with retry
      connectWithRetry(connection);
  }catch(err){
    console.error("\n🔴 Application Startup Failed Due to DB Connection.");

  }
}

module.exports = {
  initializeConnection
};