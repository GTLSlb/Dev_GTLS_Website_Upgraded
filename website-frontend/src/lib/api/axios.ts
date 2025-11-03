/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { ZodError } from "zod";
import { handleSessionExpiration } from "@/lib/utils/helper";
import { toast } from "sonner";

const BACKEND_HOST = process.env.NEXT_PUBLIC_APP_GTRR_API_URL;
const GTAM_API_URL = process.env.NEXT_PUBLIC_APP_GTAM_API_URL;
const GTRR_API_URL = process.env.NEXT_PUBLIC_APP_GTRR_API_URL;

export const _axios = axios.create({
  baseURL: BACKEND_HOST,
  timeout: 60000,
  withCredentials: true, // ✅ Default to true for GTRR backend
});

_axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";

    // ✅ Conditionally set withCredentials based on URL
    const isGTAMRequest =
      config.url?.includes(GTRR_API_URL || "gtrr") ||
      config.baseURL?.includes(GTRR_API_URL || "gtrr") ||
      config.url?.includes(GTAM_API_URL || "gtam") ||
      config.baseURL?.includes(GTAM_API_URL || "gtam");

    if (isGTAMRequest) {
      config.withCredentials = false; // ❌ Don't send credentials to GTAM
    } else {
      config.withCredentials = true; // ✅ Send credentials to GTRR
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  (response) => {
    // ✅ Log response for debugging
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function handleErrors(error: unknown): Error {
  if (error instanceof ZodError) {
    // Handle validation errors specifically
    console.error("⛔ Validation failed:", error.issues);
    // Throw a custom error or return a structured validation response
    error.issues.forEach((issue) => {
      // Formats the path (e.g., 'siteName') and the error message (e.g., 'Required')
      
      const path = issue.path.join('.'); 
      
      let formattedPath = path;
      if (path.toLowerCase().endsWith('id')) {
        formattedPath = path.slice(0, -2);
      }

      const message = formattedPath ? `${formattedPath}  cannot be empty` : issue.message;
      toast.error(message, {
        duration: 5000 // Give the user time to read validation errors
      });
    });
    
    throw new Error(
      "Input validation failed: " +
        error.issues.map((i) => i.message).join(", ")
        , { cause: error.issues }
    );
  } else if (error instanceof Error) {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorBody = error.response.data;
        const message =
          errorBody?.message ||
          errorBody ||
          "Error was thrown but 'message' property not in response body";
        if (error.response.status == 401) {
          handleSessionExpiration();
        }
        toast.error(message);
        return new Error(message, { cause: error });
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        toast.error(error.message || "Something went wrong");
        return error;
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error(error.message || "Something went wrong");
        return error;
      }
    } else {
      // Just a stock error
      toast.error(error.message || "Something went wrong");
    }
    toast.error(error.message || "Something went wrong");
    console.error("Error occured: ", error);
    return error;
  }
  return new Error("Error thrown is not of type error!");
}

export const handleServerError = (
  error: any,
  handleMessage: (message: null | string | Array<string>, json?: any) => void
) => {
  const detailedError = error;
  if (detailedError.cause) {
    const axiosErr = detailedError.cause;
    if (axiosErr?.response?.data) {
      const errorMessages: string = (
        axiosErr.response.data as { message: string }
      ).message;

      toast.error(errorMessages);
      handleMessage(errorMessages, axiosErr.response.data);
    }
  } else {
    toast.error(detailedError.message ?? "An unknown error occurred");
    handleMessage([detailedError.message ?? "An unknown error occurred"]);
  }
};

export function getCookie(name: string, default_val?: string): string {
  if (typeof document === "undefined") {
    return "";
  }
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts && parts.length === 2) {
    const cookieValue = parts.pop()?.split(";").shift();
    if (cookieValue) {
      return cookieValue;
    }
  }

  if (default_val) {
    return default_val;
  }

  return "";
}
