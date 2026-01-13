"use client";

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_APP_STRAPI_API_TOKEN;

// Generic fetcher for SWR
export const fetcher = async (endpoint: string) => {
  // console.log("=== FETCHER CALLED ===");
  // console.log("Endpoint:", endpoint);
  // console.log("Base URL:", STRAPI_BASE_URL);
  // console.log("Full URL:", `${STRAPI_BASE_URL}${endpoint}`);
  // console.log("Token exists:", !!STRAPI_TOKEN);

  const url = `${STRAPI_BASE_URL}${endpoint}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });

  // console.log("Response status:", res.status);
  // console.log("Response OK:", res.ok);

  if (!res.ok) {
    const error = new Error("Failed to fetch data from Strapi");
    try {
      const errorData = await res.json();
      console.error("Error data:", errorData);
      (error as any).cause = errorData;
    } catch {
      (error as any).cause = { status: res.status, statusText: res.statusText };
    }
    throw error;
  }

  const jsonData = await res.json();

  return jsonData;
};
