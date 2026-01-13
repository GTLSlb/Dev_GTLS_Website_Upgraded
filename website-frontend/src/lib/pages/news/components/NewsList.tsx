"use client";

import { useState, useMemo } from "react";
import { Input } from "@/lib/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/lib/ui/pagination";
import { NewsItem } from "@/lib/types/news";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { Button } from "@/lib/ui/button";
import SearchBar from "../sections/SearchBar";
import NewsCard from "@/lib/components/Common/NewsCard";
import { NewsCardProps } from "@/lib/types/cards";
import { StrapiLink } from "@/lib/services/media";

interface Props {
  NewsList: NewsCardProps[];
}
function duplicateArray<T>(arr: T[], times: number): T[] {
  if (times < 1) return [];

  const result: T[] = [];
  for (let i = 0; i < times; i++) {
    result.push(...arr);
  }
  return result;
}
export default function NewsList({ NewsList }: Props) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Dynamic page-size based on screen width
  const pageSize =
    typeof window !== "undefined"
      ? window.innerWidth >= 1024
        ? 9
        : window.innerWidth >= 768
        ? 6
        : 3
      : 9; // default (SSR)

  // Filter the list
  const filtered = useMemo(() => {
    const s = search.toLowerCase();
    return NewsList?.filter(
      (item) =>
        item.title.toLowerCase().includes(s) ||
        item.description.toLowerCase().includes(s)
    );
  }, [search, NewsList]);

  const totalPages = Math.ceil(filtered.length / pageSize);

  const [displayedNews, setDisplayedNews] = useState(
    filtered.slice((page - 1) * pageSize, page * pageSize)
  );

  const handleSearchNews = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
    if (e.target.value === "") setDisplayedNews(NewsList);
    else {
      const filtered = NewsList?.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.description.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setDisplayedNews(filtered);
    }
  };

  const handleFilterCategories = (e: String) => {
    if (e === "all") setDisplayedNews(NewsList);
    else {
      const filtered = NewsList?.filter((item) => item.category === e);
      setDisplayedNews(filtered);
    }
  };

  const categories = NewsList?.reduce((acc, item) => {
    if (!acc.find((cat) => cat.value === item.category)) {
      acc.push({ label: item.category, value: item.category });
    }
    return acc;
  }, [] as { label: string; value: string }[]);

  return (
    <div className="flex flex-col gap-6">
      {/* Search Input */}
      <SearchBar
        data={categories}
        onSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearchNews(e)
        }
        onSearchClick={() => {}}
        onSelect={(e: String) => handleFilterCategories(e)}
      />
      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedNews.map((news, index) => (
          <NewsCard
            key={index}
            imageSrc={StrapiLink(news.coverImg?.url ?? "/placeholder.jpg")}
            title={news.title}
            category={news.category}
            description={news.description}
            documentId={news.documentId}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => page > 1 && setPage(page - 1)}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={page === i + 1}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => page < totalPages && setPage(page + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
