"use client";

import { NavbarApiResponse } from "./types/navigation";
import { NewsPage, NewsSliderDataType } from "./types/news";
import {
  getHomePageData,
  getAboutUsPageData,
  getBTriplePageData,
  getIndustryPageData,
  getSustainabilityPageData,
  getTransportPageData,
  getWarehousingPageData,
  getNavbarData,
  getNewsPageData,
} from "@/lib/services/api";
import { SustainabilityPage } from "./types/pages";


export const newsData = {
  title: "Latest News",
  items: [
    {
      title: "We've Doubled Our B-Triple Fleet!",
      date: "June 10, 2025",
      description:
        "At Gold Tiger Logistics Solutions, we're proud to announce that we have doubled our B-Triple fleet.",
      image: "/webp/3movers.webp", // replace with actual path
      href: "/posts/b-triple-fleet",
    },
    {
      title: "New Depot Opening in Sydney",
      date: "May 15, 2025",
      description:
        "We are excited to expand our network with a brand new logistics hub in Sydney.",
      image: "/webp/3movers.webp",
      href: "/posts/depot-opening",
    },
    {
      title: "We've Doubled Our B-Triple Fleet!",
      date: "June 10, 2025",
      description:
        "At Gold Tiger Logistics Solutions, we're proud to announce that we have doubled our B-Triple fleet.",
      image: "/webp/3movers.webp", // replace with actual path
      href: "/posts/b-triple-fleet",
    },
    {
      title: "New Depot Opening in Sydney",
      date: "May 15, 2025",
      description:
        "We are excited to expand our network with a brand new logistics hub in Sydney.",
      image: "/webp/3movers.webp",
      href: "/posts/depot-opening",
    },
    // Add more posts here
  ],
};

export const postsData = {
  title: "Latest Posts",
  items: [
    {
      title: "We've Doubled Our B-Triple Fleet!",
      date: "June 10, 2025",
      description:
        "At Gold Tiger Logistics Solutions, we're proud to announce that we have doubled our B-Triple fleet.",
      image: "/webp/3movers.webp", // replace with actual path
      href: "/posts/b-triple-fleet",
    },
    {
      title: "New Depot Opening in Sydney",
      date: "May 15, 2025",
      description:
        "We are excited to expand our network with a brand new logistics hub in Sydney.",
      image: "/webp/3movers.webp",
      href: "/posts/depot-opening",
    },
    {
      title: "We've Doubled Our B-Triple Fleet!",
      date: "June 10, 2025",
      description:
        "At Gold Tiger Logistics Solutions, we're proud to announce that we have doubled our B-Triple fleet.",
      image: "/webp/3movers.webp", // replace with actual path
      href: "/posts/b-triple-fleet",
    },
    {
      title: "New Depot Opening in Sydney",
      date: "May 15, 2025",
      description:
        "We are excited to expand our network with a brand new logistics hub in Sydney.",
      image: "/webp/3movers.webp",
      href: "/posts/depot-opening",
    },
    // Add more posts here
  ],
};

export const home_page_data = await getHomePageData();

export const news_page_data: NewsPage = await getNewsPageData();

export const about_page_data = await getAboutUsPageData();

export const b_triple_page_data = await getBTriplePageData();

export const industry_page_data = await getIndustryPageData();

export const sustainability_page_data: SustainabilityPage =
  await getSustainabilityPageData();

export const transport_page_data = await getTransportPageData();

export const warehousing_page_data = await getWarehousingPageData();

export const navbar_data: NavbarApiResponse = await getNavbarData();
