export const gtamUrl = process.env.NEXT_PUBLIC_APP_GTAM_API_URL || "";
export const backendUrl = process.env.NEXT_PUBLIC_APP_WEBSITE_API_URL || "";

export const AUTH_ENDPOINTS = {
  login: "/login",
  logout: "/logout",
  "microsoft-token": "/microsoft-token",
  "azure-callback": "/azure/callback",
  "forgot-password": "/forgot-password",
  validate: "/Validate/Session",
  users: "/users",
  "logout-without-request": "/logout-without-request",
  "upload-doc": "/upload-doc",
};

export const PERMISSIONS = {
  "user-apps-permissions": '/User/Permissions',
  "user-permissions": "/User/AppPermissions",
}