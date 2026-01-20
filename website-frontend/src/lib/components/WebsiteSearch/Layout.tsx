"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import {
  Search,
  Loader,
  ChevronLeft,
  ChevronRight,
  FileX2Icon,
  SearchXIcon,
} from "lucide-react";

import { SearchResult } from "@/lib/types/searchResults";
import TextWrapper from "@/lib/components/Common/TextWrapper";

import AnimatedLoading from "../Loader/AnimatedLoading";
import SectionContainer from "../Containers/sectionContainer";

import HighlightedSearchResultsList from "./HighlightedSearchResultsList";
import { performSearch, debounceQuery } from "@/lib/utils/search.utils";

export default function SearchPageLayout() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");

  const [query, setQuery] = React.useState(searchQuery || "");
  const [isLoadingResults, setIsLoadingResults] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<SearchResult>({
    query: "",
    total_hits: 0,
    results: [],
  });

  // Handle debouncing: Only perform search after 500ms of no input
  const [debouncedQuery, setDebouncedQuery] = React.useState(query);
  React.useEffect(() => {
    debounceQuery(query, setDebouncedQuery);
  }, [query]);

  // 2. Perform the Search: Triggered only when debouncedQuery changes
  React.useEffect(() => {
    // Only search if there's a real query
    if (debouncedQuery.trim() !== "") {
      setIsLoadingResults(true);
      setErrorMessage(""); // Clear previous errors

      performSearch(
        debouncedQuery,
        setIsLoadingResults,
        setSearchResults,
        setErrorMessage,
      );
    } else {
      // Reset if user clears the input
      setSearchResults({ query: "", total_hits: 0, results: [] });
      setIsLoadingResults(false);
    }
  }, [debouncedQuery]);

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1);
  const resultsPerPage = 10;

  // Flatten all hits from all collections
  const allHits = React.useMemo(() => {
    if (!searchResults?.results) return [];
    return searchResults.results.flatMap((result) =>
      result.hits.map((hit) => ({
        ...hit,
        collection: result.collection,
      })),
    );
  }, [searchResults]);

  // Calculate pagination
  const totalPages = Math.ceil(allHits.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentHits = allHits.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Go to previous page
  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Go to next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Search Section
  const searchSection = () => {
    return (
      <div className="w-full h-full flex flex-col gap-4 py-4">
        <SectionContainer
          className="flex items-center justify-center"
          parentClassName="py-4 overflow-hidden bg-gold text-white font-bold text-xl pt-10"
        >
          {/* Use 'query' here for immediate UI feedback, or 'debouncedQuery' for stability */}
          <div>{query === "" ? "Search" : `Search Results for: ${query}`}</div>
        </SectionContainer>

        <div className="w-full relative">
          <input
            className="w-full border border-gray-300 rounded-lg py-3 px-10 focus:ring-2 focus:ring-gold outline-none"
            type="text"
            placeholder="Search our services, locations..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="absolute size-4 left-4 top-[17px] text-gray-400" />

          {/* Loading indicator is now non-intrusive inside the bar */}
          {isLoadingResults && (
            <Loader className="absolute size-4 right-4 top-[17px] animate-spin text-gold" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      <SectionContainer
        className=""
        parentClassName="relative py-4 overflow-hidden"
      >
        {/* Default Search */}
        {searchSection()}

        {/* If the input is empty, show the "Start Searching" prompt */}
        {query.trim() === "" ? (
          <div className="min-h-[40vh] w-full flex flex-col items-center justify-center gap-y-2 text-center py-12 text-gray-500">
            <Search size="48" strokeWidth={1} />
            <p>Start searching by typing in the search bar above</p>
          </div>
        ) : (
          <>
            {/* Error handling */}
            {errorMessage ? (
              <div className="flex flex-col items-center justify-center gap-y-2 text-center py-12 text-red-600 min-h-[30vh]">
                <SearchXIcon size="56" />
                <p className="font-semibold">{errorMessage}</p>
              </div>
            ) : allHits.length === 0 ? (
              /* No Results found */
              <div className="flex flex-col items-center justify-center gap-y-2 text-center py-12 text-gray-500 min-h-[30vh]">
                <FileX2Icon size="64" strokeWidth={1} />
                <p>No results found for "{debouncedQuery}"</p>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col gap-4 py-4">
                {/* Search Results */}
                <div>
                  <TextWrapper
                    text={`${allHits.length} results found ${
                      currentPage > 1
                        ? `(Page ${currentPage} of ${totalPages})`
                        : ""
                    }`}
                    fontFamily="dmSans"
                    styleType="body"
                    className={`text-gray-600 text-sm mb-4 ${
                      query == "" ? "hidden" : ""
                    }`}
                  />
                  <>
                    <HighlightedSearchResultsList
                      maxScore={
                        (searchResults.results[0]?.hits[0].score as number) ||
                        578730123365189800
                      }
                      hits={currentHits}
                      query={query}
                    />

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-8">
                        <button
                          onClick={goToPrevPage}
                          disabled={currentPage === 1}
                          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          aria-label="Previous page"
                        >
                          <ChevronLeft className="size-5" />
                        </button>

                        <div className="flex items-center gap-1">
                          {getPageNumbers().map((page, index) => (
                            <React.Fragment key={index}>
                              {page === "..." ? (
                                <span className="px-3 py-2 text-gray-400">
                                  ...
                                </span>
                              ) : (
                                <button
                                  onClick={() => goToPage(page as number)}
                                  className={`px-4 py-2 rounded-lg transition-colors hover:cursor-pointer ${
                                    currentPage === page
                                      ? "bg-[#eacc87] text-black font-medium"
                                      : "border border-gray-300 hover:bg-gray-100"
                                  }`}
                                >
                                  {page}
                                </button>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        <button
                          onClick={goToNextPage}
                          disabled={currentPage === totalPages}
                          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          aria-label="Next page"
                        >
                          <ChevronRight className="size-5" />
                        </button>
                      </div>
                    )}
                  </>
                </div>
              </div>
            )}
          </>
        )}
      </SectionContainer>
    </div>
  );
}
