"use client";

import { useState, useMemo } from "react";
import NewsCard from "@/lib/pages/news/components/NewsCard";
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

interface Props {
  NewsList: NewsItem[];
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
    return duplicateArray(NewsList, 10).filter(
      (item) =>
        item.title.toLowerCase().includes(s) ||
        item.description.toLowerCase().includes(s)
    );
  }, [search, NewsList]);

  const totalPages = Math.ceil(filtered.length / pageSize);

  const displayedNews = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="flex flex-col gap-6">
      {/* Search Input */}
      <div className="flex flex-col md:flex-row p-5 border border-color-[#6e6f7a] rounded-3xl gap-4">
        <Input
          placeholder="Search Articles"
          className="bg-creamy rounded-full w-full h-11"
          icon={<Search className="text-dark-gold size-4" />}
          value={search}
          onChange={(e) => {
            setPage(1); // reset page on new search
            setSearch(e.target.value);
          }}
        />
        <Select>
          <SelectTrigger className="bg-creamy rounded-full w-full md:w-9/12 !h-11">
            <SelectValue placeholder="Article Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="land">Land</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-dark-gold rounded-full h-11 md:w-2/12">
          <Search className="text-creamy size-4" /> Search Article
        </Button>
      </div>
      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedNews.map((news, index) => (
          <NewsCard key={index} {...news} />
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
