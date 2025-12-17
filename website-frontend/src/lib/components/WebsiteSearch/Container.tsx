"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { search } from "@/lib/services/search";
import { Search, Loader } from "lucide-react";

import { SearchResult } from "@/lib/types/searchResults";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import Link from "next/link";

export default function SearchContainer({
  setOpenSearchContainer,
}: {
  setOpenSearchContainer?: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const [isLoadingResults, setIsLoadingResults] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState<SearchResult>({
    query: "",
    total_hits: 0,
    results: [],
  });

  const handleClick = (href: string) => {
    if (setOpenSearchContainer) {
      setOpenSearchContainer(false);
    }
    router.push(href);
  };

  React.useEffect(() => {
    if (query != "") {
      setIsLoadingResults(true);
      search(query).then((data) => {
        setSearchResults(data as SearchResult);
        setIsLoadingResults(false);
      });
    } else {
      setSearchResults({
        query: "",
        total_hits: 0,
        results: [],
      });
      setIsLoadingResults(false);
    }
  }, [query]);

  return (
    <div className="flex flex-col justify-center gap-2 w-full p-4">
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
          <ul className="flex flex-col gap-2 my-2">
            {searchResults?.results.slice(0, 2)?.map((result, index) => (
              <li key={index}>
                <div className="flex flex-col gap-2">
                  {result.hits.slice(0, 2).map((hit) => (
                    <button onClick={() => handleClick(hit.url)}>
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
            onClick={() => handleClick("/search?query=" + query)}
            className="flex items-center gap-2 hover:underline hover:text-light-gold hover:cursor-pointer p-1 rounded"
          >
            View all {searchResults?.total_hits} results
          </button>
        </div>
      )}
    </div>
  );
}
