"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import { search } from "@/lib/services/search";
import {
  Search,
  Loader,
  ChevronLeft,
  ChevronRight,
  FileX2Icon,
} from "lucide-react";

import { SearchResult } from "@/lib/types/searchResults";
import TextWrapper from "@/lib/components/Common/TextWrapper";

import AnimatedLoading from "../Loader/AnimatedLoading";
import SectionContainer from "../Containers/sectionContainer";

import HighlightedSearchResultsList from "./HighlightedSearchResultsList";

export default function SearchPageLayout() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");

  const [query, setQuery] = React.useState("");
  const [isLoadingResults, setIsLoadingResults] = React.useState(true);
  const [searchResults, setSearchResults] = React.useState<SearchResult>({
    query: "",
    total_hits: 0,
    results: [],
  });

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1);
  const resultsPerPage = 10;

  React.useEffect(() => {
    if (searchQuery) {
      setQuery(searchQuery);
      setIsLoadingResults(true);
      setCurrentPage(1); // Reset to first page on new search
      search(query)
        .then((data) => {
          setSearchResults(data as SearchResult);
          setIsLoadingResults(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setIsLoadingResults(false);
        });
    } else {
      setIsLoadingResults(false);
      setSearchResults({
        query: "",
        total_hits: 0,
        results: [],
      });
    }
  }, [searchQuery]);
  React.useEffect(() => {
    if (query != "") {
      setIsLoadingResults(true);
      setCurrentPage(1); // Reset to first page on new search
      search(query)
        .then((data) => {
          setSearchResults(data as SearchResult);
          setIsLoadingResults(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setIsLoadingResults(false);
        });
    }
  }, [query]);

  // Flatten all hits from all collections
  const allHits = React.useMemo(() => {
    if (!searchResults?.results) return [];
    return searchResults.results.flatMap((result) =>
      result.hits.map((hit) => ({
        ...hit,
        collection: result.collection,
      }))
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

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

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

  return (
      <div className="h-full w-full">
        <SectionContainer
          className=""
          parentClassName="relative py-4 overflow-hidden"
        >
          {isLoadingResults && allHits.length == 0 ? (
            <div className="min-h-[60vh] w-full">
              <AnimatedLoading />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col gap-4 py-4">
              {/* Search Query Text */}
              <SectionContainer
                className="flex items-center justify-center"
                parentClassName="py-4 overflow-hidden bg-gold text-white font-bold text-xl pt-10"
              >
                <div>Search Results for: {query}</div>
              </SectionContainer>
              {/* Search Input */}
              <div className="w-full relative">
                <input
                  className="w-full border border-gray-300 rounded-lg py-3 px-10"
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Search className="absolute size-4 left-4 top-[17px]" />
                <Loader
                  className={`${
                    isLoadingResults ? "block" : "hidden"
                  } absolute size-4 right-7 top-7 animate-spin`}
                />
              </div>
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
                {allHits.length === 0 ? (
                  <div className="flex flex-col items-center justify-center gap-y-2 text-center py-12 text-gray-500 min-h-[30vh] w-full">
                    <div>
                      <FileX2Icon size="64" />
                    </div>
                    <div>
                      No results found {query == "" ? "" : `for "${query}"`}
                    </div>
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          )}
        </SectionContainer>
      </div>
  );
}
