import { search } from "@/lib/services/search";
import { SearchResult } from "@/lib/types/searchResults";

// Function to perform the search: Triggered only when debouncedQuery changes
export async function performSearch(
  debouncedQuery: string,
  page: number,
  limit: number,
  setIsLoadingResults: (isLoading: boolean) => void,
  setSearchResults: (results: SearchResult) => void,
  setError: (error: string) => void,
) {
  setError("");
  if (debouncedQuery.trim() !== "") {
    setIsLoadingResults(true);
    search(debouncedQuery, page, limit)
      .then((data) => {
        setSearchResults(data as SearchResult);
        setIsLoadingResults(false);
      })
      .catch((error) => {
        const errorData = error.response.data;
        setError(errorData.error);
        setIsLoadingResults(false);
      });
  } else {
    setSearchResults({
      query: "",
      total_hits: 0,
      pagination: {
        current_page: 1,
        per_page: 10,
        total_pages: 1,
        has_more: false,
      },
      results: [],
    });
    setIsLoadingResults(false);
  }
}

export async function debounceQuery(
  query: string,
  setDebouncedQuery: (query: string) => void,
) {
  const handler = setTimeout(() => {
    // 500ms delay
    setDebouncedQuery(query);
  }, 500);

  return () => {
    // Cancel the timeout if the user types again
    clearTimeout(handler);
  };
}

// Remove query and close the search container
export async function removeQuery(
  setQuery: (query: string) => void,
  setOpenSearchContainer: (open: boolean) => void,
  setSearchResults: (results: SearchResult) => void,
) {
  setQuery("");
  setOpenSearchContainer(false);
  setSearchResults({
    query: "",
    total_hits: 0,
    pagination: {
      current_page: 1,
      per_page: 10,
      total_pages: 1,
      has_more: false,
    },
    results: [],
  });
}
