"use client";

import useSWR from "swr";
import { fetcher } from "./api-fetchers";
import { UseDataResult } from "@/lib/types/hooks";

console.log("=== use-strapi-data.ts MODULE LOADED ===");
console.log("useSWR type:", typeof useSWR);
console.log("fetcher type:", typeof fetcher);

// Navbar - Cache for 1 hour (rarely changes)
export function useNavbarData(): UseDataResult<any> {
  const { data, error, isLoading } = useSWR("/navbar?populate=*", fetcher, {
    revalidateOnFocus: true,
    dedupingInterval: 3600000, // 1 hour
  });

  return {
    data: data || null, // Navbar is already unwrapped by Strapi
    loading: isLoading,
    error: error || null,
  };
}

// Footer - Cache for 1 hour (rarely changes)
export function useFooterData(): UseDataResult<any> {
  const { data, error, isLoading } = useSWR("/footer?populate=*", fetcher, {
    revalidateOnFocus: true,
    dedupingInterval: 3600000, // 1 hour
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error || null,
  };
}

// Home Page - Cache for 10 seconds
export function useHomePageData(): UseDataResult<any> {
  console.log("=== useHomePageData HOOK CALLED ===");

  const { data, error, isLoading } = useSWR("/home-page?populate=*", fetcher, {
    revalidateOnFocus: true,
    dedupingInterval: 10000,
  });

  console.log("useHomePageData state:", {
    hasData: !!data,
    hasError: !!error,
    isLoading
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error || null,
  };
}

// About Us - Cache for 10 seconds
export function useAboutUsPageData(): UseDataResult<any> {
  const { data, error, isLoading } = useSWR(
    "/aboutus-page?populate=*",
    fetcher,
    {
      revalidateOnFocus: true,
      dedupingInterval: 10000,
    }
  );

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error || null,
  };
}

// B-Triple - Cache for 10 seconds
export function useBTriplePageData(): UseDataResult<any> {
  const { data, error, isLoading } = useSWR("/b-triple?populate=*", fetcher, {
    revalidateOnFocus: true,
    dedupingInterval: 10000,
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error || null,
  };
}

// Industry - Cache for 10 seconds
export function useIndustryPageData(): UseDataResult<any> {
  const { data, error, isLoading } = useSWR("/industry?populate=*", fetcher, {
    revalidateOnFocus: true,
    dedupingInterval: 10000,
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error || null,
  };
}

// Sustainability - Cache for 10 seconds
export function useSustainabilityPageData(): UseDataResult<any> {
  const { data, error, isLoading } = useSWR(
    "/sustainability?populate=*",
    fetcher,
    {
      revalidateOnFocus: true,
      dedupingInterval: 10000,
    }
  );

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error || null,
  };
}

// Transport - Cache for 10 seconds
export function useTransportPageData(): UseDataResult<any> {
  const { data, error, isLoading } = useSWR("/transport?populate=*", fetcher, {
    revalidateOnFocus: true,
    dedupingInterval: 10000,
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error || null,
  };
}

// Warehousing - Cache for 10 seconds
export function useWarehousingPageData(): UseDataResult<any> {
  const { data, error, isLoading } = useSWR(
    "/warehousing?populate[WhyChooseGtls][populate]=*",
    fetcher,
    {
      revalidateOnFocus: true,
      dedupingInterval: 10000,
    }
  );

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error || null,
  };
}

// News Page - Cache for 10 seconds
export function useNewsPageData(): UseDataResult<any> {
  const { data, error, isLoading } = useSWR("/news-page?populate=*", fetcher, {
    revalidateOnFocus: true,
    dedupingInterval: 10000,
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error || null,
  };
}

// Single News Item - Dynamic ID, Cache for 10 seconds
export function useSingleNews(id: string): UseDataResult<any> {
  const { data, error, isLoading } = useSWR(
    id ? `/news-items/${id}?populate=*` : null,
    fetcher,
    {
      revalidateOnFocus: true,
      dedupingInterval: 10000,
    }
  );

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error || null,
  };
}
