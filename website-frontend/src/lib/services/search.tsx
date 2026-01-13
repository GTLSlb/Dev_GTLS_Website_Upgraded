import axios, { AxiosError } from "axios";
import { SearchResult } from "../types/searchResults";

export const BACKEND_URL = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

export const dynamic = "force-dynamic";

const revalidate = 10;
const api_client = axios.create({
  baseURL: BACKEND_URL,
});

// Function to re-index Typesense collections
export async function re_index_collections() {
  try {
    const response = await api_client.get("/re-index");

    // eslint-disable @typescript-eslint/no-explicit-any
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Error fetching user data:", axiosError.message);
    return null;
  }
}

// Function to delete all Typesense collections
export async function delete_all_collections() {
  try {
    const response = await api_client.get("/delete-all-collections");

    // eslint-disable @typescript-eslint/no-explicit-any
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Error fetching user data:", axiosError.message);
    return null;
  }
}

export async function search(query: string) {
  try {
    const params = {
      q: query,
    };
    const response = await api_client.get("/search", {
      params,
      // @ts-expect-error next required to revalidate cache
      next: {
        revalidate: revalidate,
        tags: ["search-website"],
      },
    });
    return response.data as SearchResult;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Error fetching B-Triple page data:", axiosError.message);
    return null;
  }
}
