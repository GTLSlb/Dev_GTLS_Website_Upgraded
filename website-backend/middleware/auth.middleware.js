const connection = require("../database/connection");
const STATUS = require("../shared-utils/status-code");

const { is_token_valid, get_user_info } = require("../utils/auth.utils");

const auth_routes = [
  "/login",
  "/logout",
  "/forgot-password",
  "/azure/callback",
  "/microsoft-token",
  "/logout-without-request",
];

const get_user_and_token = async (user_id, token) => {
  const table_name = process.env.DB_TABLE || "custom_sessions";
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * from " + table_name + " WHERE payload = ? AND user_id = ?",
      [token, user_id],
      function (error, results, fields) {
        if (error) {
          console.error("❌ Query failed in Auth Middleware: ", error);
          return reject(error); // Reject the promise on error
        }

        // 2. Check if any session was found
        const isValid = results && results.length > 0;

        // 3. Resolve the promise with the boolean result
        resolve(isValid);
      }
    );
  });
};

const authenticate = async (req, res, next) => {
  const path = req.path;
  const jwt_token = req.headers["authorization"]?.split(" ")[1];

  const hasSession = is_token_valid(jwt_token);
  const decoded_info = get_user_info(jwt_token);

  const token = decoded_info.token ?? null;
  const user_id = decoded_info.userId ?? null;

  // Allow access to base url
  if (path == "") {
    return next();
  } else if (hasSession) {
    const is_valid_token = await get_user_and_token(user_id, token);

    // Allow access to specific routes without session
    const is_accessing_auth_route = auth_routes.includes(path) ? true : false;

    // Check if token is valid
    if (is_accessing_auth_route) {
      return next();
    } 
    // TODO: Temporary disabled since if the user is logged in from Laravel
    // this will always be false
    
    // else if (!is_valid_token) {
    //   return res
    //     .status(STATUS.UNAUTHORIZED)
    //     .json({ status: STATUS.UNAUTHORIZED, message: "Unauthorized" });
    // }
  } else {
    // Allow access to specific routes without session
    const is_accessing_auth_route = auth_routes.includes(path) ? true : false;
    if (is_accessing_auth_route) {
      return next();
    } else {
      return res
        .status(STATUS.UNAUTHORIZED)
        .json({ status: STATUS.UNAUTHORIZED, message: "Unauthorized" });
    }
  }

  return next();
};

module.exports = authenticate;
