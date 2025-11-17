require("dotenv").config({ path: "./.env" });
const { validationResult } = require("express-validator");
const connection = require("../database/connection");
const axios = require("axios");

const STATUS = require("../shared-utils/status-code");
const logger = require("../shared-utils/logging");

const {
  destroy_session,
  generate_token,
  is_token_valid,
  get_user_info,
  fill_user_model,
  is_session_valid,
} = require("../utils/auth.utils");

class AuthController {
  async login(req, res) {
    const parameters = req.body;
    const userObject = parameters.UserObject;
    const token = parameters.Token;
    const db_table = process.env.DB_TABLE || "custom_sessions";

    if (userObject && token) {
      // Generate Session using user id and owner id
      const userId = userObject.UserId;

      // Generate JWT token
      const jwt_token = generate_token(userObject, token);

      const lastActivity = Date.now() / 1000;

      const query = `INSERT INTO ${db_table} (id, user_id, payload, user, last_activity, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`;

      connection.query(
        query,
        [
          token,
          userId,
          token,
          Array.isArray(userObject)
            ? JSON.stringify(userObject[0])
            : JSON.stringify(userObject),
          lastActivity,
        ],
        (err, results) => {
          if (err) {
            console.error("❌ Database error:", err);
            logger.error("Database INSERT failed: " + err.message);
            return res.status(STATUS.INTERNAL_SERVER_ERROR).send({
              status: STATUS.INTERNAL_SERVER_ERROR,
              message: "Database error",
              error: err.message,
            });
          }

          const cookieConfig = {
            httpOnly: false,
            domain: process.env.COOKIE_DOMAIN || ".gtls.com.lb", // ✅ Must match frontend
            sameSite: process.env.COOKIE_SAMESITE || "lax", // ⚠️ "none" requires secure: true
            secure: process.env.COOKIE_SECURE === "true",
            maxAge: parseInt(process.env.COOKIE_MAX_AGE || "86400000"),
            path: "/",
          };

          res.cookie("jwt_token", jwt_token, cookieConfig);

          const expiresIn = 24 * 60 * 60;

          res.send({
            status: STATUS.OK,
            message: "Login successful",
            access_token: token,
            token_type: "Bearer",
            jwt_token: jwt_token,
            expires_in: expiresIn,
            user: Array.isArray(userObject) ? userObject[0] : userObject,
          });
        }
      );
    } else {
      const errorMessage = "Something went wrong, try again later";
      logger.error("Internal Server Error");
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
        user: null,
        token: null,
        status: STATUS.INTERNAL_SERVER_ERROR,
        message: errorMessage,
      });
    }
  }

  async azureCallback(req, res) {
    const parameters = req.headers;
    const userObject = JSON.parse(parameters.userobject);
    const token = parameters.token;
    const db_table = process.env.DB_TABLE || "custom_sessions";

    if (userObject && token) {
      // Generate Session using user id and owner id
      const userId = userObject.UserId;

      const user = JSON.stringify(userObject);

      const lastActivity = Date.now() / 1000;
      const query = `INSERT INTO ${db_table} (id, user_id, payload, user, last_activity, created_at, updated_at) VALUES (?, ?, ?, ?, ?, , NOW(), NOW())`;

      connection.query(
        query,
        [
          token,
          userId,
          token,
          Array.isArray(userObject)
            ? JSON.stringify(userObject[0])
            : JSON.stringify(userObject),
          lastActivity,
        ],
        (err, results) => async () => {
          if (err) {
            console.error("Error running query:", err);
            logger.error("Error running query: " + err);
            return res.status(STATUS.CONFLICT).json({
              user: null,
              token: null,
              status: STATUS.CONFLICT,
              message: errorMessage,
            });
          }
          res.status(STATUS.OK).json({
            user: user,
            token: token,
            status: STATUS.OK,
            message: "Login successful",
          });
        }
      );
    } else {
      const errorMessage = "Something went wrong, try again later";
      logger.error("Internal Server Error");
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
        user: null,
        token: null,
        status: STATUS.INTERNAL_SERVER_ERROR,
        message: errorMessage,
      });
    }
  }

  async logout(req, res) {
    const parameters = req.body;

    const session_domain = parameters.SessionDomain || "";
    const user = parameters.CurrentUser;
    const root = parameters.URL;

    const returnObj = {
      status: STATUS.OK,
      message: "Logout successful",
    };

    // 1. Initial Missing User Check
    if (!user) {
      // Send and return immediately
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
        status: STATUS.INTERNAL_SERVER_ERROR,
        message: "Missing user information",
      });
    }

    const headers = {
      UserId: user.UserId,
    };

    try {
      // 2. Call the external logout API
      await axios.get(`${root}logout`, { headers: headers });

      // 3. If API succeeds, destroy the session and send success response
      await destroy_session(req, res, session_domain);
      return res.status(STATUS.OK).json({
        message: "Logout successful",
      });
    } catch (error) {
      // 4. Handle API error (e.g., already logged out)
      if (
        error.response &&
        error.response.status === STATUS.BAD_REQUEST &&
        error.response.data.Message === "User already logged out"
      ) {
        logger.warn("User already logged out: " + user.UserId);

        // Clear cookie and send success response immediately
        res.clearCookie("gtls_session");
        return res.status(STATUS.OK).json({
          status: STATUS.OK,
          message: "Logout successful",
        });
      } else {
        // 5. Handle all other errors (e.g., Network, Server Error)
        logger.error("Internal Server Error: " + error.message);
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
          status: STATUS.INTERNAL_SERVER_ERROR,
          message: "Internal Server Error",
          error: error.message,
        });
      }
    }
  }

  async microsoftToken(req, res) {
    const parameters = req.body;
    const access_token = parameters.socialiteUser.accessToken;

    const root = parameters.URL;
    const headers = {
      Authorization: access_token,
    };

    await axios
      .post(`${root}validate/MicrosoftToken`, {}, { headers })
      .then(async (response) => {
        if (response.status == STATUS.OK) {
          const responseJson = response.data;
          const userObject = responseJson.user;
          const token = responseJson.access_token;
          const userId = userObject.UserId;

          // Generate JWT token
          const jwt_token = generate_token(userObject, token);

          // ✅ Cookie configuration with try-catch
          try {
            const cookieConfig = {
              httpOnly: false,
              domain: process.env.COOKIE_DOMAIN || ".gtls.com.lb", // ✅ Must match frontend
              sameSite: process.env.COOKIE_SAMESITE || "lax", // ⚠️ "none" requires secure: true
              secure: process.env.COOKIE_SECURE === "true",
              maxAge: parseInt(process.env.COOKIE_MAX_AGE || "86400000"),
              path: "/",
            };

            res.cookie("jwt_token", jwt_token, cookieConfig);
          } catch (cookieError) {
            console.error("❌ Failed to set cookie!");
            console.error("Cookie Error:", cookieError);
            logger.error("Cookie setting failed: " + cookieError.message);

            // Don't fail the entire request, just log it
            // The JWT token will still be in the response body
          }

          const lastActivity = Date.now() / 1000;

          const query = `INSERT INTO custom_sessions (id, user_id, payload, user, last_activity, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`;

          connection.query(
            query,
            [
              token,
              userId,
              token,
              Array.isArray(userObject)
                ? JSON.stringify(userObject[0])
                : JSON.stringify(userObject),
              lastActivity,
            ],
            (err, results) => {
              if (err) {
                console.error("❌ Database error:", err);
                logger.error("Database INSERT failed: " + err.message);
                return res.status(500).send({
                  status: STATUS.INTERNAL_SERVER_ERROR,
                  message: "Database error",
                  error: err.message,
                });
              }

              const expiresIn = 24 * 60 * 60;
              res.send({
                status: STATUS.OK,
                message: "Login successful",
                access_token: token,
                token_type: "Bearer",
                jwt_token: jwt_token,
                expires_in: expiresIn,
                user: Array.isArray(userObject) ? userObject[0] : userObject,
              });
            }
          );
        } else {
          // Handle error cases...
          const errorMessage = response.data.Message || "Authentication error";

          console.error("❌ Authentication failed:", errorMessage);

          if (errorMessage.includes("InvalidAuthenticationToken")) {
            res.send({
              status: STATUS.UNAUTHORIZED,
              message:
                "Error while validating token: Invalid Authentication Token",
            });
          } else {
            res.send({
              status: STATUS.INTERNAL_SERVER_ERROR,
              message: errorMessage,
            });
          }
        }
      })
      .catch((error) => {
        console.error("❌ Authentication error:", error);
        console.error("Error details:", {
          message: error.message,
          code: error.code,
          response: error.response?.data,
        });
        logger.error("Internal Server Error: " + error.message);

        res.status(500).send({
          status: STATUS.INTERNAL_SERVER_ERROR,
          message: error.message || "Authentication error",
        });
      });
  }

  async logoutWithoutRequest(req, res) {
    try {
      const session_domain = req.body.SessionDomain || "";

      // Destroy the session token
      await destroy_session(req, res, session_domain);

      return res.send({
        status: STATUS.OK,
        message: "Logout Successfully",
      });
    } catch (err) {
      logger.error("Internal Server Error: " + err.message);
      return res.send({
        status: STATUS.INTERNAL_SERVER_ERROR,
        message: "Logout failed. Please try again. " + err.message,
      });
    }
  }

  async getCurrentUser(req, res) {
    const errors = validationResult(req);
    const table_name = process.env.DB_TABLE || "custom_sessions";

    if (!errors.isEmpty()) {
      logger.error("Bad Request: " + errors.array());
      return res.status(STATUS.BAD_REQUEST).json({ errors: errors.array() });
    }

    if (is_token_valid(req.body.jwt_token) === false)
      return res
        .status(STATUS.UNAUTHORIZED)
        .json({ status: STATUS.UNAUTHORIZED, message: "Unauthorized" });

    let user_info = get_user_info(req.body.jwt_token)
      ? get_user_info(req.body.jwt_token)
      : {};

    if (user_info.user) {
      // Use parameterized query to prevent SQL injection
      //const query = `SELECT * FROM ?? WHERE payload=? AND user_id=?`;
      //const params = [table_name, user_info.token, user_info.user.UserId];
      
      const query = `SELECT * FROM ?? WHERE user_id=?`;
      const params = [table_name, user_info.user.UserId];
      
      connection.query(query, params, async (error, results) => {
        if (error) {
          logger.error("Database error: ", error);
          return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            status: STATUS.INTERNAL_SERVER_ERROR,
            message: "Internal Server Error",
            data: null,
          });
        }
        //TODO: Change this after fixing SQL insert in Laravel projects
        if (results.length > 0 || Object.keys(user_info?.user).length !== 0) {
          const user = results.length > 0 ? results[0] : user_info?.user;

          // Parse the JSON string from the database
          let parsedUser;
          try {
             const user_obj = user.hasOwnProperty('user') ? user.user : user;
            console.log('In IF', typeof user_obj, user_obj);
            parsedUser =
              typeof user_obj === "string" ? JSON.parse(user_obj) : user_obj;
          } catch (parseError) {
            logger.error("Error parsing user JSON:", parseError);
            return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
              message: "Error parsing user data",
            });
          }
          console.log('Parsed User', parsedUser);
          const logged_in_user = fill_user_model(parsedUser);

          if (logged_in_user) {
            let response = { data: {gtls_session: null} };
            try {
              const gtamUrl = process.env.GTAM_APP_URL || "";

              const body = {
                user: parsedUser,
                token: user_info.token,
                jwt_token: req.body.jwt_token,
                gtls_session: null,
                gtam_url: process.env.GTAM_API_URL || "",
              };
              console.log("🗣️ Req body:", body);
              console.log("🗣️gtamUrs:", gtamUrl);
              console.log('⛔URL', `${gtamUrl}/exchange-token`)
              response = await axios.post(
              `${gtamUrl}exchange-token`,
              body,
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              }
            );
            } catch (err) {
              console.log("⛔ Error sharing session:", err.message);
              logger.error("Error sharing session: " + err.message);
            }
            console.log('res', response.data)
            console.log('gtls session', response.data.data)
            return res.status(STATUS.OK).json({
              token: user_info.token,
              user: logged_in_user,
              jwt_token: req.body.jwt_token,
              gtls_session: response.data.data.gtls_session,
            });
          } else {
            return res.status(STATUS.NOTFOUND).json({
              message: "User not found",
            });
          }
        } else {
          return res.status(STATUS.NOTFOUND).json({
            message: "User not found",
          });
        }
      });
    } else {
      return res.status(STATUS.UNAUTHORIZED).json({
        message: "Unauthorized",
      });
    }
  }

  async exchangeToken(req, res) {
    try {
      const { user, token, gtls_session, jwt_token } = req.body;
      const user_obj = typeof user === "string" ?  JSON.parse(user) : user;

      console.log("📢 Valid Session from Laravel:", user_obj?.UserId, gtls_session);
      if (!user_obj || !token || !gtls_session) {
        return res.status(STATUS.BAD_REQUEST).json({
          error: "User and token are required",
        });
      }

      // Check if the session is valid
      const isValidSession = await is_session_valid(token, user_obj.UserId);
      if (isValidSession === false) {
        return res.status(STATUS.UNAUTHORIZED).json({
          error: "Unauthorized",
        });
      }

      console.log("📢 Session is valid:", isValidSession);
      console.log("🗼 gtls_session:", gtls_session, "jwt_token:", jwt_token);
      if (gtls_session && !jwt_token) {
        // Session is valid, from another app
        // Generate JWT token
        const jwt_token_new = generate_token(user_obj, token);
        console.log("🗼 new jwt token:", jwt_token_new);
        return res.status(STATUS.OK).json({
          token: token,
          user: user_obj,
          jwt_token: jwt_token_new,
        });
      } else {
        return res.status(STATUS.UNAUTHORIZED).json({
          error: "Unauthorized",
        });
      }
    } catch (err) {
      logger.error("Internal Server Error: " + err.message);
      return res.send({
        status: STATUS.INTERNAL_SERVER_ERROR,
        message: "Logout failed. Please try again. " + err.message,
      });
    }
  }
}

module.exports = new AuthController();
