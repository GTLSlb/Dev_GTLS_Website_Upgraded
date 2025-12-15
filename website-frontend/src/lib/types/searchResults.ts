export type SearchResult = {
    query: string;
    total_hits: number;
    results: SearchResultItem[];
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
    score: number;
    document: any;
};