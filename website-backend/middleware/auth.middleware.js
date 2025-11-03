const validate_access_token = require("../utils/auth.utils");
const connection = require("../database/connection");

const auth_routes = [
  "/login",
  "/logout",
  "/forgot-password",
  "/azure/callback",
  "/microsoft-token",
  "/logout-without-request",
];

const getUserandToken = async (session_id) => {
  const table_name = process.env.DB_TABLE || "custom_sessions";
      connection.query(
        "SELECT * from " + table_name + " WHERE id = ?",
        [session_id],
        function (error, results, fields) {
          if (error) {
            console.error("❌ Query failed: ", error);
            throw error;
          }
          return res.status(STATUS.OK).json({ user: results[0].user, results: results[0], token: results[0].payload, session: session_id });
        }
      );
};

const authenticate = async (req, res, next) => {
  const path = req.path;
  const hasSession = req.session;

  // Allow access to base url
  if (path == "") {
    return next();
  } else if (hasSession) {
    const session_id = req.sessionID;
    const results = await getUserandToken(session_id);

    const token = results.token;
    const user_id = JSON.parse(results.user).UserId;
    const is_valid_token =
      token && user_id ? validate_access_token(token, user_id) : false;

    // Allow access to specific routes without session
    const is_accessing_auth_route = auth_routes.includes(path) ? true : false;

    // Check if token is valid
    if (is_accessing_auth_route) {
      return next();
    } else if (is_valid_token.status !== 200) {
      return res.redirect("/login");
    }
  } else {
    // Allow access to specific routes without session
    const is_accessing_auth_route = auth_routes.includes(path) ? true : false;
    if (is_accessing_auth_route) {
      return next();
    } else {
      return res.redirect("/login");
    }
  }

  return next();
};

module.exports = authenticate;
