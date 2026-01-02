import axios, { AxiosError } from "axios";
import { handleSessionExpiration } from "../utils/helper";
import Swal from "sweetalert2";

export const GTAM_URL = process.env.NEXT_PUBLIC_APP_GTAM_API_URL;
export const BACKEND_URL = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

export const dynamic = "force-dynamic";

const api_client = axios.create({
  baseURL: BACKEND_URL,
});

const gtam_client = axios.create({
  baseURL: GTAM_URL,
});

// --- API Functions ---

/**
 * Fetches the data for the 'B-Triple' single type page.
 * API Endpoint: /api/b-triple?populate=*
 * @returns {Promise<object | null>} - The formatted B-Triple page data.
 */

export async function get_user_info(jwt_token: string) {
  try {
    // Make GET request to /users endpoint
    // obtain user, token, jwt_token from response
    const response = await api_client.post("/users", {
      jwt_token: jwt_token,
    });
    const user = response.data.user;
    const token = response.data.token;
    const jwt_token_res = response.data.jwt_token;

    // Make GET request to /user/permissions endpoint
    const allowed_apps_response = await gtam_client.get("User/Permissions", {
      headers: {
        UserId: user.UserId,
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      user: user,
      token: token,
      jwt_token: jwt_token_res,
      allowed_apps: allowed_apps_response.data,
    };
    // eslint-disable @typescript-eslint/no-explicit-any
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.status === 401) {
        // Handle 401 error
        Swal.fire({
          title: "Session Expired!",
          text: "Please login again",
          icon: "warning",
          showCancelButton: false,
          confirmButtonText: "OK",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await handleSessionExpiration();
          }
        });
      }
    }
    const axiosError = error as AxiosError;
    console.error("Error fetching user data:", axiosError.message);
    return null;
  }
}

// --- Strapi Configuration ---
// Note: Strapi axios client available for potential use in other parts of the codebase
// Page data fetching now handled by SWR hooks in /lib/hooks/use-strapi-data.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const strapi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_STRAPI_API_TOKEN}`,
  },
});
