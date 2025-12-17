"use client";
import React from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

// Define the expected structure of a single hit object from your formatted search results
interface SearchHit {
  id: string;
  title: string;
  type: string; // The collection name (used as 'collection' in your original map)
  document: any;
  score: number;
  url: string;
}

interface HighlightedSearchResultsListProps {
  maxScore: number;
  hits: SearchHit[];
  query: string;
}

// Utility function to extract text preview from any document structure
const extractTextPreview = (
  doc: any,
  query: string,
  maxLength = 200
): string => {
  const searchableFields = [
    "text_content",
    "content",
    "description",
    "body",
    "text",
  ];

  // Try to find a field with substantial text content
  for (const field of searchableFields) {
    if (doc[field] && typeof doc[field] === "string") {
      const text = doc[field]
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .replace(/\s+/g, " ") // Normalize whitespace
        .trim();

      if (text.length > 50) {
        return text;
      }
    }
  }

  // Fallback: search all string fields
  const allText = Object.values(doc)
    .filter((val) => typeof val === "string")
    .join(" ")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return allText || "No preview available";
};

// Function to find and highlight query matches in text
const getHighlightedSnippet = (
  text: string,
  query: string,
  maxLength = 200
): { snippet: string; hasMatch: boolean } => {
  if (!query || !text)
    return { snippet: text.substring(0, maxLength) + "...", hasMatch: false };

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const queryIndex = lowerText.indexOf(lowerQuery);

  if (queryIndex === -1) {
    return { snippet: text.substring(0, maxLength) + "...", hasMatch: false };
  }

  // Calculate snippet range around the match
  const start = Math.max(0, queryIndex - 80);
  const end = Math.min(text.length, queryIndex + query.length + 120);

  let snippet = text.substring(start, end);
  if (start > 0) snippet = "..." + snippet;
  if (end < text.length) snippet = snippet + "...";

  return { snippet, hasMatch: true };
};

// Component to render text with highlighted query terms
const HighlightedText: React.FC<{
  text: string;
  query: string;
}> = ({ text, query }) => {
  if (!query) return <div>{text}</div>;

  // Use a regex with 'g' (global) and 'i' (case-insensitive) flags
  // Ensure we escape special characters in the query to prevent regex errors
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));

  return (
    <div key={text?.substring(0, 2)} className="inline">
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={index} className="bg-yellow-300 px-1 rounded font-medium inline">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </div>
  );
};

const HighlightedSearchResultsList: React.FC<
  HighlightedSearchResultsListProps
> = ({ maxScore, hits, query }) => {
  const router = useRouter();
  const handleClick = (href: string) => {
    router.push(href);
  };
  if (!hits || hits.length === 0) {
    return (
      <div className="text-center p-10 text-gray-500">
        <p>No results found for your query.</p>
      </div>
    );
  }
  return (
    <ul className="flex flex-col gap-3 my-2 mb-6">
      {hits.map((hit, index) => {
        const textPreview = extractTextPreview(hit.document, query);
        const { snippet } = getHighlightedSnippet(textPreview, query);

        return (
          // Use a stable key combining id and collection type
          <li className="w-full" key={`${hit.type}-${hit.id}-${index}`}>
            <button className="w-full" onClick={() => handleClick(hit.url)}>
              <div className="w-full border border-gray-200 rounded-lg p-4 hover:border-[#eacc87] hover:shadow-md hover:cursor-pointer transition-all">
                <div className="w-full flex justify-start items-start gap-3">
                  <Search className="size-5 flex-shrink-0 mt-1 text-gray-400" />
                  <div className="w-full flex flex-col flex-1 justify-start items-start">
                    <h3 className="font-semibold text-lg mb-1">
                      <HighlightedText text={hit.title} query={query} />
                    </h3>
                    <p className="flex text-sm text-gray-600 mb-2 line-clamp-2">
                      <HighlightedText text={snippet} query={query} />
                    </p>
                    <div className="flex justify-start items-start gap-2 text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {((hit.score / maxScore) * 100).toFixed(2)}% match
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default HighlightedSearchResultsList;
