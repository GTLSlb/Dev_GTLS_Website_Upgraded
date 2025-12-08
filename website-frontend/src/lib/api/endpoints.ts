export const gtamUrl = process.env.NEXT_PUBLIC_APP_GTAM_API_URL || "";
export const backendUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL || "";

export const AUTH_ENDPOINTS = {
  login: "/login",
  logout: "/logout",
  "microsoft-token": "/microsoft-token",
  "azure-callback": "/azure/callback",
  "forgot-password": "/forgot-password",
  "reset-password": "/reset-password",
  validate: "/Validate/Session",
  users: "/users",
  "logout-without-request": "/logout-without-request",
};

export const PERMISSIONS = {
  "user-apps-permissions": '/User/Permissions',
  "user-permissions": "/User/AppPermissions",
}