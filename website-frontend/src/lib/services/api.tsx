import axios, { AxiosError } from "axios";
import { handleSessionExpiration } from "../utils/helper";
import swal from "sweetalert";

export const GTAM_URL = process.env.NEXT_PUBLIC_APP_GTAM_API_URL;
export const BACKEND_URL = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

const api_client = axios.create({
  baseURL: BACKEND_URL,
});

const gtam_client = axios.create({
  baseURL: GTAM_URL,
});

export async function get_user_info() {
  try {
    // Make GET request to /users endpoint
    // obtain user, token, jwt_token from response
    const response = await api_client.get("/users");
    console.log("Fetching user data from /users endpoint...", response);
    const user = response.data.user;
    const token = response.data.token;
    const jwt_token = response.data.jwt_token;

    // Make GET request to /user/permissions endpoint
    const allowed_apps_response = await gtam_client.get("User/Permissions", {
        headers: {
            UserId: user.UserId,
            Authorization: `Bearer ${token}`,
        }
    });

    return { user: user, token: token, jwt_token: jwt_token, allowed_apps: allowed_apps_response.data };
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      // Handle 401 error
      swal({
        title: "Session Expired!",
        text: "Please login again",
        buttons: ["OK"],
        icon: "warning",
      }).then(async function () {
        await handleSessionExpiration();
      });
    }
    const axiosError = error as AxiosError;
    console.error("Error fetching user data:", axiosError.message);
    return null;
  }
}
