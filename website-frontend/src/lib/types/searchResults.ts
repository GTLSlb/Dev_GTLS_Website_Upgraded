export type PaginationItem = {
  current_page: number;
  per_page: number;
  total_pages: number;
  has_more: boolean;
};
export type SearchResult = {
  query: string;
  total_hits: number;
  results: SearchResultItem[];
  pagination: PaginationItem;
};

export type SearchResultItem = {
  collection: string;
  found: number;
  hits: SearchResultHit[];
};

export type SearchResultHit = {
  id: string;
  title: string;
  type: string;
  url: string;
  score: number;
  document: any;
  relative_score: number;
};

export type HighlightedSearchResultsListProps = {
  hits: SearchResultHit[];
  query: string;
};
