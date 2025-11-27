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

export const NewsData: NewsSliderDataType = {
  title: "News",
  description:
    "Stay updated with the latest news, industry trends, and behind-the-scenes stories from Gold Tiger. From expert tips to company milestones — our blog keeps you in the loop.",
  buttonText: "Read More News",
  SliderItems: [
    {
      id: 100,
      name: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
      position:
        "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
      img: {
        id: 50,
        documentId: "khzh0dzajcpfzbr4tfknedcn",
        name: "contactus.webp",
        alternativeText: "",
        caption: null,
        width: 796,
        height: 451,
        formats: {
          thumbnail: {
            name: "thumbnail_contactus.webp",
            hash: "thumbnail_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 245,
            height: 139,
            size: 7.19,
            sizeInBytes: 7188,
            url: "/uploads/thumbnail_contactus_9030e987f7.webp",
          },
          medium: {
            name: "medium_contactus.webp",
            hash: "medium_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 750,
            height: 425,
            size: 31.49,
            sizeInBytes: 31490,
            url: "/uploads/medium_contactus_9030e987f7.webp",
          },
          small: {
            name: "small_contactus.webp",
            hash: "small_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 500,
            height: 283,
            size: 19.81,
            sizeInBytes: 19814,
            url: "/uploads/small_contactus_9030e987f7.webp",
          },
        },
        hash: "contactus_9030e987f7",
        ext: ".webp",
        mime: "image/webp",
        size: 39.56,
        url: "/uploads/contactus_9030e987f7.webp",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-11-06T10:59:35.913Z",
        updatedAt: "2025-11-06T10:59:35.913Z",
        publishedAt: "2025-11-06T10:59:35.913Z",
      },
    },
    {
      id: 101,
      name: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
      position:
        "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
      img: {
        id: 50,
        documentId: "khzh0dzajcpfzbr4tfknedcn",
        name: "contactus.webp",
        alternativeText: "",
        caption: null,
        width: 796,
        height: 451,
        formats: {
          thumbnail: {
            name: "thumbnail_contactus.webp",
            hash: "thumbnail_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 245,
            height: 139,
            size: 7.19,
            sizeInBytes: 7188,
            url: "/uploads/thumbnail_contactus_9030e987f7.webp",
          },
          medium: {
            name: "medium_contactus.webp",
            hash: "medium_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 750,
            height: 425,
            size: 31.49,
            sizeInBytes: 31490,
            url: "/uploads/medium_contactus_9030e987f7.webp",
          },
          small: {
            name: "small_contactus.webp",
            hash: "small_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 500,
            height: 283,
            size: 19.81,
            sizeInBytes: 19814,
            url: "/uploads/small_contactus_9030e987f7.webp",
          },
        },
        hash: "contactus_9030e987f7",
        ext: ".webp",
        mime: "image/webp",
        size: 39.56,
        url: "/uploads/contactus_9030e987f7.webp",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-11-06T10:59:35.913Z",
        updatedAt: "2025-11-06T10:59:35.913Z",
        publishedAt: "2025-11-06T10:59:35.913Z",
      },
    },
    {
      id: 102,
      name: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
      position:
        "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
      img: {
        id: 50,
        documentId: "khzh0dzajcpfzbr4tfknedcn",
        name: "contactus.webp",
        alternativeText: "",
        caption: null,
        width: 796,
        height: 451,
        formats: {
          thumbnail: {
            name: "thumbnail_contactus.webp",
            hash: "thumbnail_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 245,
            height: 139,
            size: 7.19,
            sizeInBytes: 7188,
            url: "/uploads/thumbnail_contactus_9030e987f7.webp",
          },
          medium: {
            name: "medium_contactus.webp",
            hash: "medium_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 750,
            height: 425,
            size: 31.49,
            sizeInBytes: 31490,
            url: "/uploads/medium_contactus_9030e987f7.webp",
          },
          small: {
            name: "small_contactus.webp",
            hash: "small_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 500,
            height: 283,
            size: 19.81,
            sizeInBytes: 19814,
            url: "/uploads/small_contactus_9030e987f7.webp",
          },
        },
        hash: "contactus_9030e987f7",
        ext: ".webp",
        mime: "image/webp",
        size: 39.56,
        url: "/uploads/contactus_9030e987f7.webp",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-11-06T10:59:35.913Z",
        updatedAt: "2025-11-06T10:59:35.913Z",
        publishedAt: "2025-11-06T10:59:35.913Z",
      },
    },
    {
      id: 104,
      name: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
      position:
        "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
      img: {
        id: 50,
        documentId: "khzh0dzajcpfzbr4tfknedcn",
        name: "contactus.webp",
        alternativeText: "",
        caption: null,
        width: 796,
        height: 451,
        formats: {
          thumbnail: {
            name: "thumbnail_contactus.webp",
            hash: "thumbnail_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 245,
            height: 139,
            size: 7.19,
            sizeInBytes: 7188,
            url: "/uploads/thumbnail_contactus_9030e987f7.webp",
          },
          medium: {
            name: "medium_contactus.webp",
            hash: "medium_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 750,
            height: 425,
            size: 31.49,
            sizeInBytes: 31490,
            url: "/uploads/medium_contactus_9030e987f7.webp",
          },
          small: {
            name: "small_contactus.webp",
            hash: "small_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 500,
            height: 283,
            size: 19.81,
            sizeInBytes: 19814,
            url: "/uploads/small_contactus_9030e987f7.webp",
          },
        },
        hash: "contactus_9030e987f7",
        ext: ".webp",
        mime: "image/webp",
        size: 39.56,
        url: "/uploads/contactus_9030e987f7.webp",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-11-06T10:59:35.913Z",
        updatedAt: "2025-11-06T10:59:35.913Z",
        publishedAt: "2025-11-06T10:59:35.913Z",
      },
    },
    {
      id: 105,
      name: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
      position:
        "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
      img: {
        id: 50,
        documentId: "khzh0dzajcpfzbr4tfknedcn",
        name: "contactus.webp",
        alternativeText: "",
        caption: null,
        width: 796,
        height: 451,
        formats: {
          thumbnail: {
            name: "thumbnail_contactus.webp",
            hash: "thumbnail_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 245,
            height: 139,
            size: 7.19,
            sizeInBytes: 7188,
            url: "/uploads/thumbnail_contactus_9030e987f7.webp",
          },
          medium: {
            name: "medium_contactus.webp",
            hash: "medium_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 750,
            height: 425,
            size: 31.49,
            sizeInBytes: 31490,
            url: "/uploads/medium_contactus_9030e987f7.webp",
          },
          small: {
            name: "small_contactus.webp",
            hash: "small_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 500,
            height: 283,
            size: 19.81,
            sizeInBytes: 19814,
            url: "/uploads/small_contactus_9030e987f7.webp",
          },
        },
        hash: "contactus_9030e987f7",
        ext: ".webp",
        mime: "image/webp",
        size: 39.56,
        url: "/uploads/contactus_9030e987f7.webp",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-11-06T10:59:35.913Z",
        updatedAt: "2025-11-06T10:59:35.913Z",
        publishedAt: "2025-11-06T10:59:35.913Z",
      },
    },
    {
      id: 106,
      name: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
      position:
        "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
      img: {
        id: 50,
        documentId: "khzh0dzajcpfzbr4tfknedcn",
        name: "contactus.webp",
        alternativeText: "",
        caption: null,
        width: 796,
        height: 451,
        formats: {
          thumbnail: {
            name: "thumbnail_contactus.webp",
            hash: "thumbnail_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 245,
            height: 139,
            size: 7.19,
            sizeInBytes: 7188,
            url: "/uploads/thumbnail_contactus_9030e987f7.webp",
          },
          medium: {
            name: "medium_contactus.webp",
            hash: "medium_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 750,
            height: 425,
            size: 31.49,
            sizeInBytes: 31490,
            url: "/uploads/medium_contactus_9030e987f7.webp",
          },
          small: {
            name: "small_contactus.webp",
            hash: "small_contactus_9030e987f7",
            ext: ".webp",
            mime: "image/webp",
            path: null,
            width: 500,
            height: 283,
            size: 19.81,
            sizeInBytes: 19814,
            url: "/uploads/small_contactus_9030e987f7.webp",
          },
        },
        hash: "contactus_9030e987f7",
        ext: ".webp",
        mime: "image/webp",
        size: 39.56,
        url: "/uploads/contactus_9030e987f7.webp",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-11-06T10:59:35.913Z",
        updatedAt: "2025-11-06T10:59:35.913Z",
        publishedAt: "2025-11-06T10:59:35.913Z",
      },
    },
  ],
};

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
