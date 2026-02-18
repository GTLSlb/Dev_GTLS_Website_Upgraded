const STATUS = require("../shared-utils/status-code");

const {
  is_token_valid,
  get_user_info,
  validate_access_token,
} = require("../utils/auth.utils");
const Cookies = require("js-cookie");

const auth_routes = [
  "/login",
  "/logout",
  "/forgot-password",
  "/azure/callback",
  "/microsoft-token",
  "/logout-without-request",
];

const authenticate = async (req, res, next) => {
  const path = req.path;
  const is_accessing_auth_route = auth_routes.includes(path) ? true : false;

  // 1. LOGIC: Determine Auth Status
  // 1.a. Get the jwt token's value
  const jwt_token =
    req.headers["authorization"]?.split(" ")[1] ||
    Cookies.get("jwt_token") ||
    "";

  const is_valid_JWT =
    jwt_token == "" ||
    jwt_token == "undefined" ||
    jwt_token == "null" ||
    jwt_token == null
      ? false
      : is_token_valid(jwt_token);

  // EXCEPTION: Allow access to base url
  if (path == "") {
    return next();
  } else if (is_valid_JWT) {
    // 1.b. If the token is valid, populate the user info
    const decoded_info = get_user_info(jwt_token);
    console.log("jwt_token", jwt_token)
console.log("decoded_info", decoded_info)
    const token = decoded_info.token;
    const user_id = decoded_info.userId;

    const is_authenticated =
      token != null && user_id != null
        ? await validate_access_token(token, user_id)
        : false;
    // Allow access to specific routes without session
    const trimmedPath = path.replace("/", "");

    // 2. LOGIC: If Authenticated and trying to access Auth pages -> Redirect to Main Page
    if (
      is_authenticated &&
      is_accessing_auth_route &&
      trimmedPath != '/gtrr'
    ) {
      return res
        .status(STATUS.OK)
        .json({ status: STATUS.OK, message: "User is authenticated", redirect: "/gtrr", user: decoded_info.user, token: decoded_info.token, jwt_token: jwt_token });
    }

    // 3. LOGIC: If NOT Authenticated and trying to access Protected pages -> Redirect to Login
    if (
      !is_authenticated &&
      !is_accessing_auth_route &&
      trimmedPath != "login"
    ) {
      return res
        .status(STATUS.UNAUTHORIZED)
        .json({ status: STATUS.UNAUTHORIZED, message: "Unauthorized", redirect: "/login", user: decoded_info.user, token: decoded_info.token, jwt_token: jwt_token });
    }
  } else {
    // Allow access to specific routes without session
    if (is_accessing_auth_route) {
      return next();
    } else {
      return res
        .status(STATUS.UNAUTHORIZED)
        .json({ status: STATUS.UNAUTHORIZED, message: "Unauthorized", redirect: "/login", user: null, token: null, jwt_token: jwt_token });
    }
  }

  return next();
};

module.exports = authenticate;
