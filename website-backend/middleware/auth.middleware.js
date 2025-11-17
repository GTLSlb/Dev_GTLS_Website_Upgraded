const connection = require("../database/connection");
const STATUS = require("../shared-utils/status-code");

const {
  is_token_valid,
} = require("../utils/auth.utils");

const auth_routes = [
  "/login",
  "/logout",
  "/users",
  "/forgot-password",
  "/azure/callback",
  "/microsoft-token",
  "/logout-without-request",
];

const getUserandToken = async (user_id, token) => {
  if(!user_id || !token) {
    return false;
  }
  const table_name = process.env.DB_TABLE || "custom_sessions";
      connection.query(
        "SELECT * from " + table_name + " WHERE id = ? AND user_id = ?",
        [token, user_id],
        function (error, results, fields) {
          if (error) {
            console.error("❌ Query failed: ", error);
            throw error;
          }
          return true;
      }
    );
};

const authenticate = async (req, res, next) => {
  const path = req.path;  

  const token = req.headers["authorization"]?.split(' ')[1];
  const user_id = req.body?.["user_id"] ?? null;
  const jwt_token = req.body?.["jwt_token"] ?? null;

  const hasSession = is_token_valid(jwt_token);
  
  // Allow access to base url
  if (path == "") {
    return next();
  } else if (hasSession) {
    const is_valid_token = await getUserandToken(user_id, token);
    console.log('⚙️ is_authenticated', is_valid_token ? ' true' : ' false');
    // Allow access to specific routes without session
    const is_accessing_auth_route = auth_routes.includes(path) ? true : false;

    // Check if token is valid
    if (is_accessing_auth_route) {
      return next();
    } else if (is_valid_token) {
      return res.status(STATUS.UNAUTHORIZED).json({ status: STATUS.UNAUTHORIZED, message: "Unauthorized" });
    }
  } else {
    // Allow access to specific routes without session
    const is_accessing_auth_route = auth_routes.includes(path) ? true : false;
    if (is_accessing_auth_route) {
      return next();
    } else {
      return res.status(STATUS.UNAUTHORIZED).json({ status: STATUS.UNAUTHORIZED, message: "Unauthorized" });
    }
  }

  return next();
};

module.exports = authenticate;
