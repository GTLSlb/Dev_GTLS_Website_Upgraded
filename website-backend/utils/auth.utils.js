require("dotenv").config({ path: "../.env" });

const axios = require("axios");
const jwt = require("jsonwebtoken");
const connection = require("../database/connection");

const STATUS = require("../shared-utils/status-code");
const logger = require("../shared-utils/logging");

const Employee = require("../models/Employee");
const Customer = require("../models/Customer");
const Driver = require("../models/Driver");

const validate_access_token = async (token, user_id) => {
  const root = process.env.GTAM_API_URL;
  const headers = {
    UserId: user_id,
    Token: token,
  };
  try {
    const response = await axios.post(
      `${root}Validate/Session`,
      {},
      { headers }
    );
    if (response.status === STATUS.OK) {
      return res.status(STATUS.OK).json({
        message: "Success",
        data: response.data,
      });
    } else {
      return res.status(STATUS.UNAUTHORIZED).json({
        message: "Unauthorized",
        error: response.data,
      });
    }
  } catch (error) {
    logger.error("Internal Server Error: " + error.message);
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const clear_storage_cookies = async (req, res, session_domain) => {
  const expiration = new Date(0); // January 1, 1970
  const secure = req.protocol === "https";
  const sessionDomain = req.body.SessionDomain || "/";

  Object.keys(req.cookies).forEach((name) => {
    res.clearCookie(name, {
      expires: expiration,
      path: "/",
      domain: sessionDomain,
      secure: secure,
      httpOnly: true,
    });
  });

  // Remove the msal.isMicrosoftLogin cookie
  res.clearCookie("msal.isMicrosoftLogin", {
    expires: new Date(0),
    domain: session_domain,
    httpOnly: true,
  });
  res.clearCookie("jwt_token", {
    expires: new Date(0),
    domain: session_domain,
    httpOnly: true,
  });
};

// Wrap connection.query in a Promise
const runQuery = (sql) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

const destroy_session = async (req, res, session_domain) => {
    const table_name = process.env.DB_TABLE || "custom_sessions";
    
    // 1. Await cookie clearing
    await clear_storage_cookies(req, res, session_domain);

    let sql;
    let userId;

    // 2. Determine SQL based on payload
    if (!req.body.jwt_token) {
        userId = req.body.CurrentUser.UserId;
        sql = `DELETE FROM ${table_name} WHERE user_id="${userId}"`;
    } else {
        const decodedInfo = await get_user_info(req.body.jwt_token);
        userId = decodedInfo.userId;
        sql = `DELETE FROM ${table_name} WHERE payload="${decodedInfo.token}" AND user_id="${decodedInfo.userId}"`;
    }

    // 3. Execute the database query
    try {
        await runQuery(sql);
        return { success: true, userId: userId };
    } catch (error) {
        // Log the error but don't send a response.
        logger.error("DB Session destruction failed: " + error.message);
        // Rethrow the error so the parent function can catch it and send the response.
        throw new Error("Failed to delete session from DB", { cause: error });
    }
};

const generate_token = (user, token) => {
  return jwt.sign(
    { user: user, userId: user.UserId, Token: token },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );
};

const decode_token = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

const is_token_valid = (token) => {
  try {
    decode_token(token);
    return true;
  } catch (error) {
    return false;
  }
};

const get_user_info = (token) => {
  if (is_token_valid(token) === false) return null;
  const decodedInfo = decode_token(token);
  return {
    user: decodedInfo.user,
    userId: decodedInfo.userId,
    token: decodedInfo.Token,
  };
};

const fill_user_model = (user) => {
          if (user.TypeId == 1) {
          // The user is a customer
          logged_in_user = new Customer(
            user.UserId,
            user.TypeId,
            user.TypeName,
            user.OwnerId,
            user.PhoneNumber,
            user.CustomerName,
            user.Picture,
            user.Username,
            user.Email
          );
        } else if (user.TypeId == 2) {
          // The user is an employee
          logged_in_user = new Employee(
            user.UserId,
            user.TypeId,
            user.TypeName,
            user.OwnerId,
            user.PhoneNo,
            user.FirstName,
            user.LastName,
            user.Picture,
            user.Username,
            user.Email,
            user.Address,
            user.Dob,
            user.NationalityId,
            user.NationalityName,
            user.BranchId,
            user.RoleId,
            user.RoleName,
            user.ReportToId,
            user.ReportToName,
            user.HiringDate,
            user.StateId,
            user.StateName
          );
        } else if (user.TypeId == 3) {
          // The user is a driver
          logged_in_user = new Driver(
            user.UserId,
            user.TypeId,
            user.TypeName,
            user.truckNbr,
            user.location,
            user.driverNbr,
            user.Username,
            user.Email,
            user.phoneNbr
          );
        }else{
          logged_in_user = null;
        }

        return logged_in_user;
}

module.exports = {
  validate_access_token,
  clear_storage_cookies,
  destroy_session,
  decode_token,
  generate_token,
  is_token_valid,
  get_user_info,
  fill_user_model,
};
