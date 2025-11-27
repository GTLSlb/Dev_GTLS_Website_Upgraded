import axios, { AxiosError } from "axios";
import { handleSessionExpiration } from "../utils/helper";
import Swal from "sweetalert2";

export const GTAM_URL = process.env.NEXT_PUBLIC_APP_GTAM_API_URL;
export const BACKEND_URL = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

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
    //eslint-disable-next-line
  } catch (error: any) {
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
    const axiosError = error as AxiosError;
    console.error("Error fetching user data:", axiosError.message);
    return null;
  }
}

// --- Configuration ---
// Set the base URL for your Strapi API
const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const strapi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // You can add authorization headers here if needed, e.g.,
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_STRAPI_API_TOKEN}`,
  },
});

export async function getBTriplePageData() {
  try {
    const params = {
      populate: "*",
    };
    const response = await strapi.get("/b-triple", { params });
    // Strapi Single Type response structure: { data: { id, attributes: {...} }, meta: {} }
    const item = response.data.data;

    if (item) {
      // Return the clean object containing id and all attributes
      return item;
    }
    return null;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Error fetching B-Triple page data:", axiosError.message);
    return null;
  }
}

/**
 * Fetches the data for the 'Warehousing' single type page.
 * API Endpoint: /api/warehousing?populate[WhyChooseGtls][populate]=*
 * @returns {Promise<object | null>} - The formatted Warehousing page data.
 */
export async function getWarehousingPageData() {
  try {
    const params = {
      // Use the complex deep population query required by Strapi
      "populate[WhyChooseGtls][populate]": "*",
    };
    const response = await strapi.get("/warehousing", { params });

    // Standard Strapi Single Type unwrapping
    const item = response.data.data;

    if (item) {
      return item;
    }
    return null;
  } catch (error) {
    // Implement type checking or assertion for robust error handling
    if (error instanceof Error) {
      console.error("Error fetching Warehousing page data:", error.message);
    } else {
      console.error(
        "An unknown error occurred fetching Warehousing data:",
        error
      );
    }
    return null;
  }
}

/**
 * Fetches the data for the 'About Us' single type page.
 * API Endpoint: /api/about-us?populate=*
 * @returns {Promise<object | null>} - The formatted About Us page data.
 */
export async function getAboutUsPageData() {
  try {
    const params = {
      populate: "*",
    };
    const response = await strapi.get("/aboutus-page", { params });

    // Standard Strapi Single Type unwrapping
    const item = response.data.data;

    if (item) {
      return item;
    }
    return null;
  } catch (error) {
    // Robust error handling
    if (error instanceof Error) {
      console.error("Error fetching About Us page data:", error.message);
    } else {
      console.error("An unknown error occurred fetching About Us data:", error);
    }
    return null;
  }
}

/**
 * Fetches the data for the 'Industry' single type page.
 * API Endpoint: /api/industry?populate=*
 * @returns {Promise<object | null>} - The formatted Industry page data.
 */
export async function getIndustryPageData() {
  try {
    const params = {
      populate: "*",
    };
    const response = await strapi.get("/industry", { params });

    // Standard Strapi Single Type unwrapping
    const item = response.data.data;

    if (item) {
      return item;
    }
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching Industry page data:", error.message);
    } else {
      console.error("An unknown error occurred fetching Industry data:", error);
    }
    return null;
  }
}

export async function getSustainabilityPageData() {
  try {
    const params = {
      populate: "*",
    };
    const response = await strapi.get("/sustainability", { params });

    // Standard Strapi Single Type unwrapping
    const item = response.data.data;

    if (item) {
      return item;
    }
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching Industry page data:", error.message);
    } else {
      console.error("An unknown error occurred fetching Industry data:", error);
    }
    return null;
  }
}

export async function getTransportPageData() {
  try {
    const params = {
      populate: "*",
    };
    const response = await strapi.get("/transport", { params });

    // Standard Strapi Single Type unwrapping
    const item = response.data.data;

    if (item) {
      return item;
    }
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching Industry page data:", error.message);
    } else {
      console.error("An unknown error occurred fetching Industry data:", error);
    }
    return null;
  }
}

export async function getFooterData() {
  try {
    const params = {
      populate: "*",
    };
    const response = await strapi.get("/footer", { params });

    // Standard Strapi Single Type unwrapping
    const item = response.data.data;

    if (item) {
      return item;
    }
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching Footer page data:", error.message);
    } else {
      console.error("An unknown error occurred fetching Footer data:", error);
    }
    return null;
  }
}

export async function getNavbarData() {
  try {
    const params = {
      populate: "*",
    };
    const response = await strapi.get("/navbar", { params });

    // Standard Strapi Single Type unwrapping
    const item = response.data;

    if (item) {
      return item;
    }
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching Industry page data:", error.message);
    } else {
      console.error("An unknown error occurred fetching Industry data:", error);
    }
    return null;
  }
}

export async function getHomePageData() {
  try {
    const params = {
      populate: "*",
    };

    const response = await strapi.get("/home-page", { params });

    // Standard Strapi Single Type unwrapping
    const item = response.data.data;

    if (item) {
      return item;
    }
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching Industry page data:", error.message);
    } else {
      console.error("An unknown error occurred fetching Industry data:", error);
    }
    return null;
  }
}

export async function getNewsPageData() {
  try {
    const params = {
      populate: "*",
    };

    const response = await strapi.get("/news-page", { params });

    // Standard Strapi Single Type unwrapping
    const item = response.data.data;

    if (item) {
      return item;
    }
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching Industry page data:", error.message);
    } else {
      console.error("An unknown error occurred fetching Industry data:", error);
    }
    return null;
  }
}

export async function getSingleNews(id: string | number) {
  try {
    const params = {
      populate: "*", // populate all relations/components
    };

    const response = await strapi.get(`/news-items/${id}`);

    // Standard Strapi response unwrapping
    const item = response.data.data;

    if (item) {
      return item;
    }
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching news item:", error.message);
    } else {
      console.error("An unknown error occurred fetching news item:", error);
    }
    return null;
  }
}