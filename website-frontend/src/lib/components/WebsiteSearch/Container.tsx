"use client";
import React from "react";
import { useRouter } from 'next/navigation';

import { search } from "@/lib/services/search";
import { Search, Loader } from "lucide-react";

import { SearchResult } from "@/lib/types/searchResults";
import TextWrapper from "@/lib/components/Common/TextWrapper";

export default function SearchContainer() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  
  const [isLoadingResults, setIsLoadingResults] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState<SearchResult>({
    query: "",
    total_hits: 0,
    results: [],
  });

  const handleClick = () => {
    router.push('/search?query=' + query);
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
              <Search className="size-4" /> B-Triple
            </li>
            <li className="flex items-center gap-2 hover:bg-[#eacc87] hover:cursor-pointer p-1 rounded">
              <Search className="size-4" /> Sustainability
            </li>
            <li className="flex items-center gap-2 hover:bg-[#eacc87] hover:cursor-pointer p-1 rounded">
              <Search className="size-4" /> Transport
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
                    <div className="flex items-center gap-2 hover:bg-[#eacc87] hover:cursor-pointer p-1 rounded">
                      <Search className="size-4" />
                      <span id={hit.id}>{hit.title}</span>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <button onClick={handleClick} className="flex items-center gap-2 hover:underline hover:text-light-gold hover:cursor-pointer p-1 rounded">
            View all {searchResults?.total_hits} results
          </button>
        </div>
      )}
    </div>
  );
}
