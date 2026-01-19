"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Search, Loader, SearchXIcon } from "lucide-react";

import { SearchResult } from "@/lib/types/searchResults";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import { performSearch, debounceQuery } from "@/lib/utils/search.utils";

export default function SearchContainer({
  query,
  setQuery,
  searchResults,
  setSearchResults,
  setOpenSearchContainer,
}: {
  setOpenSearchContainer?: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  searchResults: SearchResult;
  setSearchResults: (results: SearchResult) => void;
}) {
  const router = useRouter();
  const [isLoadingResults, setIsLoadingResults] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  // Handle debouncing: Only perform search after 500ms of no input
  const [debouncedQuery, setDebouncedQuery] = React.useState(query);
  React.useEffect(() => {
    debounceQuery(query, setDebouncedQuery);
  }, [query]);

  // 2. Perform the Search: Triggered only when debouncedQuery changes
  React.useEffect(() => {
    performSearch(
      debouncedQuery,
      setIsLoadingResults,
      setSearchResults,
      setErrorMessage,
    );
  }, [debouncedQuery]);

  // Handle click on a search result
  const handleClick = (href: string) => {
    router.push(href);
    if (setOpenSearchContainer) {
      setOpenSearchContainer(false);
      setSearchResults({ query: "", total_hits: 0, results: [] });
      setQuery("");
    }
  };

  return (
    <div
      id="Search-Container"
      className="flex flex-col justify-center gap-2 w-full p-4"
    >
      <input
        className="relative border border-gray-300 rounded-lg py-2 px-7"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Search className="absolute size-4 left-6 top-7" />
      <Loader
        className={`${
          isLoadingResults ? "block" : "hidden"
        } absolute size-4 right-7 top-7 animate-spin`}
      />
      {searchResults?.results?.length == 0 && query == "" ? (
        <div>
          <TextWrapper
            text="Popular Searches"
            fontFamily="dmSans"
            styleType="body"
            className="text-gray-600 text-sm"
          />
          <ul className="flex flex-col gap-2 my-2">
            <li className="flex items-center gap-2 hover:bg-[#eacc87] hover:cursor-pointer p-1 rounded">
              <button
                className="flex items-center gap-2"
                onClick={() => handleClick("/b-triple")}
              >
                <Search className="size-4" /> B-Triple
              </button>
            </li>
            <li className="flex items-center gap-2 hover:bg-[#eacc87] hover:cursor-pointer p-1 rounded">
              <button
                className="flex items-center gap-2"
                onClick={() => handleClick("/industries")}
              >
                <Search className="size-4" /> Industries
              </button>
            </li>
            <li className="flex items-center gap-2 hover:bg-[#eacc87] hover:cursor-pointer p-1 rounded">
              <button
                className="flex items-center gap-2"
                onClick={() => handleClick("/transport")}
              >
                <Search className="size-4" /> Transport
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <TextWrapper
            text="Search Results"
            fontFamily="dmSans"
            styleType="body"
            className="text-gray-600 text-sm"
          />
          {errorMessage && errorMessage != "" ? (
            <div className="my-4 flex items-center justify-baseline gap-x-2 text-red-600">
              <SearchXIcon className="size-4" />
              <TextWrapper
                text={errorMessage}
                fontFamily="dmSans"
                styleType="body"
                className="text-red-600 font-semibold"
              />
            </div>
          ) : (
            <>
              <ul className="flex flex-col gap-2 my-2">
                {searchResults?.results.slice(0, 2)?.map((result, index) => (
                  <li key={index}>
                    <div key={index} className="flex flex-col gap-2">
                      {result.hits.slice(0, 2).map((hit) => (
                        <button
                          key={hit.id}
                          onClick={() => handleClick(hit.url)}
                        >
                          <div className="flex items-center gap-2 hover:bg-[#eacc87] hover:cursor-pointer p-1 rounded">
                            <Search className="size-4" />
                            <span id={hit.id}>{hit.title}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  handleClick("/search?query=" + query);
                }}
                className="flex items-center gap-2 hover:underline hover:text-light-gold hover:cursor-pointer p-1 rounded"
              >
                View all {searchResults?.total_hits} results
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
