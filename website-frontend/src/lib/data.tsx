"use client";

import {
  BarChart3,
  Check,
  CheckCircle,
  Eye,
  FileText,
  HandHeart,
  HeartHandshake,
  HelpCircle,
  Leaf,
  Lock,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";
import { MenuSection, NavigationConfig } from "./types/navigation";
import { CustomerHubDataType, FeatureCard } from "./types/cards";
import { IntegratedSolutionsItem } from "./types/integratedSolutions";
import { ServiceData } from "./types/services";
import { InfoSection } from "./types/info";
import { BannerDataType, MessageBannerData } from "./types/banners";
import { OurTeamDataType, ProfileItem } from "./types/profiles";
import {
  CoreValuesDataType,
  IndustriesDataArray,
  OurStoryDataType,
  VisionDataType,
} from "./types/content";
import { Location } from "./types/location";
import { NewsSliderDataType } from "./types/news";
import { SliderItem } from "./types/sliders";
import { HeroDataType } from "./types/hero";
import { ServicesDataType } from "./types/props";
import { ExpansionDataType, GridAboutDataType } from "./types/grids";
import { BTriplesDataType } from "./types/safetyCompliance";
import {
  getHomePageData,
  getAboutUsPageData,
  getBTriplePageData,
  getIndustryPageData,
  getSustainabilityPageData,
  getTransportPageData,
  getWarehousingPageData,
} from "@/lib/services/api";

export const navigationConfig: NavigationConfig = {
  logo: {
    src: "/Logos/logo-transparent.svg",
    alt: "Gold Tiger",
    width: 120,
    height: 50,
  },
  links: [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Business",
      children: [
        {
          label: "Transport",
          href: "/transport",
        },
        {
          label: "Warehousing",
          href: "/warehousing",
        },
        {
          label: "Industries",
          href: "/industries",
        },
      ],
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Sustainability & Compliance",
      href: "/environment&compliance",
    },

    // {
    //   label: "Customer Hub",
    //   href: "/customer-hub",
    // },
    {
      label: "Contact Us",
      href: "/contactus",
    },
  ],
};

export const footerMenu: MenuSection[] = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", link: "/" },
      { label: "About Us", link: "/about" },
      { label: "Real Estate", link: "/real-estate" },
      { label: "Contact Us", link: "/contact" },
    ],
  },
  {
    title: "Our Services",
    items: [
      { label: "Custom Property", link: "/services/custom-property" },
      { label: "Property Management", link: "/services/property-management" },
      { label: "Security Guarantee", link: "/services/security" },
      { label: "Sketch House", link: "/services/sketch-house" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Return Policy", link: "/legal/return-policy" },
      { label: "Shipping Policy", link: "/legal/shipping-policy" },
      { label: "Privacy Policy", link: "/legal/privacy-policy" },
      { label: "Terms of Services", link: "/legal/terms" },
    ],
  },
];

export const locations: Location[] = [
  {
    city: "Sydney",
    street: "3B Inglis Road",
    suburb: "Ingleburn",
    state: "NSW",
    postalCode: "2565",
  },
  {
    city: "Melbourne",
    street: "60-70 Monash Drive",
    suburb: "Dandenong South",
    state: "VIC",
    postalCode: "3175",
  },
  {
    city: "Melbourne2",
    street: "60-70 Monash Drive",
    suburb: "Dandenong South",
    state: "VIC",
    postalCode: "3175",
  },
];

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
        alternativeText: null,
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
        alternativeText: null,
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
        alternativeText: null,
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
        alternativeText: null,
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
        alternativeText: null,
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
        alternativeText: null,
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

export const HistoryData: SliderItem[] = [
  {
    date: "2026",
    title: "One Truck, One Dream",
    description:
      "Young Imad El Masri launches Gold Tiger at 19, with $50,000 turnover.",
  },
  {
    date: "2010",
    title: "One Truck, One Dream",
    description:
      "Young Imad El Masri launches Gold Tiger at 19, with $50,000 turnover.",
  },
  {
    date: "2026",
    title: "One Truck, One Dream",
    description:
      "Young Imad El Masri launches Gold Tiger at 19, with $50,000 turnover.",
  },
  {
    date: "2026",
    title: "One Truck, One Dream",
    description:
      "Young Imad El Masri launches Gold Tiger at 19, with $50,000 turnover.",
  },
];

export const BannerAboutData: BannerDataType = {
  title: "Integrated Model",
  items: [
    {
      title: "Freight Solutions",
      subtitle:
        "Flexible FTL and LTL options, interstate transport, and real-time tracking for complete visibility and peace of mind.",
    },
    {
      title: "Workshop Services",
      subtitle:
        "In-house fleet maintenance and repairs to ensure reliability and minimise delays.",
    },
    {
      title: "Warehousing",
      subtitle:
        "Secure storage, inventory management, and streamlined distribution to keep your goods moving efficiently.",
    },
    {
      title: "Corporate Services",
      subtitle:
        "Financial management, customer support, sales and marketing, and IT enablement to optimise supply chain operations.",
    },
  ],
  description:
    "Gold Tiger offers seamless transport, warehousing, and distribution services tailored to each client’s operations. With a nationwide fleet of Volvo trucks, strategic warehousing, and an all-employee driving team, we move over 250,000 tonnes of freight annually for 40+ major clients including Unilever, General Mills, and Sigma Healthcare. Our proactive, tech-driven approach ensures smooth integration, custom solutions, and dependable service that solves problems before they arise—making us a true extension of your business.",
  imageSrc: "/svgs/aboutbanner.svg",
};

export const StoryData = {
  title: "Our Story",
  subtitle: "From One Truck to a National Fleet.",
  description:
    "Gold Tiger Logistics Solutions began in 2006 when a 19-year-old truck enthusiast, Imad El Masri, started with just one truck and a dream. By 2010, he had built a 20-truck interstate fleet. Today, Gold Tiger is a $55M+ logistics company with over 120 prime movers, 280 trailers, and 350+ team members — all proudly owned and operated. Backed by a strong partnership with Volvo and our in-house workshops, we keep Australia’s supply chain moving with reliability and passion.",
  numbers: [
    { label: "Fleet Size", value: "120+" },
    { label: "Trailers", value: "280+" },
    { label: "Team Members", value: "350+" },
    { label: "Annual Turnover", value: "$55M+" },
  ],
  list: [
    {
      icon: MapPin,
      title: "Strategic Locations",
      description:
        "Gold Tiger operates out of major hubs across Australia, ensuring fast and efficient interstate delivery and warehousing. Our widespread infrastructure supports seamless national coverage.",
    },
    {
      icon: MapPin,
      title: "Proven Expertise",
      description:
        "With nearly two decades of experience, we bring deep industry knowledge, a highly trained workforce, and a legacy of reliability in every shipment.",
    },
    {
      icon: MapPin,
      title: "Flexibility & Scalability",
      description:
        "From startups to enterprise clients, we tailor solutions that grow with your business. Our agile fleet and adaptable warehousing capacity make us the perfect partner for businesses of all sizes.",
    },
    {
      icon: MapPin,
      title: "Innovative Technology",
      description:
        "We harness powerful logistics software, real-time tracking, and automation to streamline operations, ensure accuracy, and improve communication across the supply chain.",
    },
    {
      icon: MapPin,
      title: "Customer-Centric Approach",
      description:
        "We believe first, act second. Our clients enjoy responsive service, dedicated account managers, and a commitment to proactive problem-solving that builds lasting relationships.",
    },
    {
      icon: MapPin,
      title: "Cost-Effective Solutions",
      description:
        "We deliver value without compromise. With owned assets, in-house staff, and process efficiency, we offer competitive pricing without cutting corners.",
    },
    {
      icon: MapPin,
      title: "Recognition & Awards",
      description:
        "Gold Tiger is recognized for excellence in service, safety, and sustainability, and continues to earn industry respect through results, innovation, and trusted partnerships.",
    },
    {
      icon: MapPin,
      title: "Sustainability Initiatives",
      description:
        "Gold Tiger invests in fuel-efficient Volvo trucks, optimizes delivery routes to reduce emissions, and uses sustainable practices across our operations. Our goal is to minimize our environmental footprint while supporting a cleaner, greener future for logistics in Australia.",
    },
  ],
};

// export const OurStoryData: OurStoryDataType = {
//   title: "Our Story",
//   content:
//     "Founded in 2006, Gold Tiger Logistics Solutions (Gold Tiger) has grown into one of Australia’s leading transport and logistics companies. Over the years, we have expanded our capabilities to provide efficient, reliable, and nationwide logistics solutions, combining industry expertise with advanced technology.\n\n We operate a fully owned fleet supported by a skilled workforce of drivers and logistics professionals. Our operations leverage state-of-the-art fleet management systems, GPS tracking, and advanced scheduling technologies to ensure every shipment is monitored, optimized, and delivered safely and on time.\n\n Our commitment to excellence is strengthened by our gold partner extended warranty with Volvo, which includes a rigorous maintenance schedule to manufacturer standards using OEM parts, 24-hour nationwide breakdown support, and replacement vehicles if trucks are off the road. All vehicles are serviced regularly by qualified mechanics in our on-site workshops.\n\n At Gold Tiger, customer satisfaction is at the heart of everything we do. From proactive communication and tracking to responsive support. We ensure our clients have complete visibility and confidence in their logistics solutions. Combining technology, experience, and a dedication to operational reliability, we deliver transport solutions that are safe, efficient, and dependable.",
//   imgSrc: "/pages/ourstory.png",
// };

// export const IndustriesData: IndustriesDataArray = [
//   {
//     imgSrc: "/pages/printing.png",
//     title: "Printing and Packaging",
//     subtitle: "Fast, Flexible, Everywhere.",
//     description:
//       "At Gold Tiger Logistics Solutions, we understand the fast-paced and detail-driven nature of the printing and packaging industry. From raw materials to finished products, timing and precision are everything. Our specialized logistics services ensure that your paper and packaging materials, and finished goods move seamlessly through every stage of the supply chain.\n\n With our advanced fleet, and high-security warehouses, and extensive distribution network, we provide reliable transport solutions that minimize delays and prevent damage to sensitive materials.\n\n By combining operational excellence with deep industry expertise, Gold Tiger Logistics supports printing and packaging businesses in maintaining continuous production, meeting tight deadlines, and achieving sustainable growth.",
//   },
//   {
//     imgSrc: "/pages/food.png",
//     title: "Food & Beverage (F&B)",
//     subtitle: "Fresh. Safe. On Time.",
//     description:
//       "At Gold Tiger Logistics Solutions, we provide reliable logistics support tailored to the Food & Beverage industry where quality, safety, and efficiency are key. We specialize in the storage and transport of room-temperature food and beverage products, ensuring they are handled with care and delivered on time.\n\n Our operations meet the highest international food safety standards, backed by our SQF (Safe Quality Food) certification. From warehousing to nationwide distribution, every process is designed to maintain product integrity and regulatory compliance throughout the supply chain.\n\n With strategically located facilities, a modern fleet, and a dedicated team, Gold Tiger Logistics Solutions helps F&B brands move their goods seamlessly from production to market ensuring safety, consistency, and customer satisfaction at every step.",
//   },
//   {
//     imgSrc: "/pages/health.png",
//     title: "Health & Beauty",
//     subtitle: "Care That Delivers.",
//     description:
//       "Health and beauty products require careful handling, secure storage, and fast distribution to protect product integrity and meet consumer demand. At Gold Tiger Logistics Solutions.\n From cosmetics and skincare to personal wellness, pharmaceuticals, and baby products, we handle every shipment with precision and care.\n\n Our secure warehouses and modern fleet ensure the safe storage and transport of sensitive items, maintaining optimal conditions from pickup to delivery. We adhere to strict hygiene and handling protocols to protect product quality and comply with industry standards.\n With our experience and commitment to reliability, Gold Tiger Logistics Solutions supports leading health, beauty, and baby care brands in delivering their products safely and efficiently building trust with every shipment.",
//   },
//   {
//     imgSrc: "/pages/fast.png",
//     title: "Fast-Moving Consumer Goods (FMCG)",
//     subtitle: "High Volume. High Velocity.",
//     description:
//       "The FMCG sector thrives on speed, availability, and scalability. To keep up with consumer demand, we provide:\n\n - High-volume warehousing with flexible storage options.\n - Nationwide transport coverage for quick replenishment.\n - Scalable distribution solutions that adapt to seasonal demand spikes.\n\n With Gold Tiger, FMCG businesses gain a logistics partner that supports growth, agility, and uninterrupted supply in a highly dynamic market.",
//   },
// ];

export const EnvironmentData = [
  {
    imgSrc: "/globe.svg",
    title: "Recycling Programs",
    subtitle: "Waste Less, Deliver More.",
    description:
      "We actively reduce our environmental footprint through structured recycling systems across all operations.",
  },
  {
    imgSrc: "/globe.svg",
    title: "Green Practices",
    subtitle: "Cleaner Choices Every Mile.",
    description:
      "From route optimization to energy-efficient facilities, we're committed to minimizing emissions and resource waste.",
  },
  {
    imgSrc: "/globe.svg",
    title: "Safety & Compliance",
    subtitle: "Doing It Right, Every Time.",
    description:
      "Strict safety protocols and full regulatory compliance keep our people and your cargo protected at all times.",
  },
  {
    imgSrc: "/globe.svg",
    title: "Partners & Certifications",
    subtitle: "Trusted, Certified, Committed.",
    description:
      "We partner with industry leaders and hold certifications that prove our dedication to ethical operations.",
  },
  {
    imgSrc: "/globe.svg",
    title: "Fatigue Management",
    subtitle: "Wellness on the Road.",
    description:
      "Our fatigue management program ensures drivers are alert, healthy, and operating at their best for safe deliveries.",
  },
];

export const contactUsData = {
  title: "Book a Meeting",
  subtitle:
    "Let’s talk logistics. Schedule a one-on-one with our team to discuss your needs.",
  description:
    "Gold Tiger Logistics Solutions began in 2006 when a 19-year-old truck enthusiast, Imad El Masri, started with just one truck and a dream. By 2010, he had built a 20-truck interstate fleet. Today, Gold Tiger is a $55M+ logistics company with over 120 prime movers, 280 trailers, and 350+ team members — all proudly owned and operated. Backed by a strong partnership with Volvo and our in-house workshops, we keep Australia’s supply chain moving with reliability and passion.",
  list: [
    {
      icon: MapPin,
      title: "Strategic Locations",
      description:
        "Gold Tiger operates out of major hubs across Australia, ensuring fast and efficient interstate delivery and warehousing. Our widespread infrastructure supports seamless national coverage.",
    },
    {
      icon: MapPin,
      title: "Proven Expertise",
      description:
        "With nearly two decades of experience, we bring deep industry knowledge, a highly trained workforce, and a legacy of reliability in every shipment.",
    },
    {
      icon: MapPin,
      title: "Flexibility & Scalability",
      description:
        "From startups to enterprise clients, we tailor solutions that grow with your business. Our agile fleet and adaptable warehousing capacity make us the perfect partner for businesses of all sizes.",
    },
    {
      icon: MapPin,
      title: "Innovative Technology",
      description:
        "We harness powerful logistics software, real-time tracking, and automation to streamline operations, ensure accuracy, and improve communication across the supply chain.",
    },
    {
      icon: MapPin,
      title: "Customer-Centric Approach",
      description:
        "We believe first, act second. Our clients enjoy responsive service, dedicated account managers, and a commitment to proactive problem-solving that builds lasting relationships.",
    },
    {
      icon: MapPin,
      title: "Cost-Effective Solutions",
      description:
        "We deliver value without compromise. With owned assets, in-house staff, and process efficiency, we offer competitive pricing without cutting corners.",
    },
    {
      icon: MapPin,
      title: "Recognition & Awards",
      description:
        "Gold Tiger is recognized for excellence in service, safety, and sustainability, and continues to earn industry respect through results, innovation, and trusted partnerships.",
    },
    {
      icon: MapPin,
      title: "Sustainability Initiatives",
      description:
        "Gold Tiger invests in fuel-efficient Volvo trucks, optimizes delivery routes to reduce emissions, and uses sustainable practices across our operations. Our goal is to minimize our environmental footprint while supporting a cleaner, greener future for logistics in Australia.",
    },
  ],
};

export const branchesData = [
  {
    name: "Sydney Branch",
    phone: "1800 04 03 06",
    address: "Jl. Danau Jonge 12, Mayjend Sungkono, SBY",
    mail: "Box 167, Hoxton Park, NSW 2171",
  },
  {
    name: "Sydney Branch",
    phone: "1800 04 03 06",
    address: "Jl. Danau Jonge 12, Mayjend Sungkono, SBY",
    mail: "Box 167, Hoxton Park, NSW 2171",
  },
];

export const IntegratedSolutionsData: IntegratedSolutionsItem[] = [
  {
    title: "Inventory Storage",
    description: "Secure, scalable warehousing tailored to your product needs.",
    picture: "/pages/inventory.png",
  },
  {
    title: "Order Fulfilment & Transport",
    description:
      "Pick, pack, and deliver with speed and accuracy across all networks.",
    picture: "/pages/order.png",
  },
  {
    title: "Delivery + Returns",
    description:
      "Seamless final-mile delivery with efficient return handling built-in.",
    picture: "/pages/delivery.png",
  },
];

export const ServicesData: ServiceData[] = [
  {
    title: "Distribution Services",
    subtitle: "From Warehousing to Delivery",
    description:
      "National Reach with Local Precision. We deliver freight swiftly and efficiently across cities, regions, and states, allowing your business to move with pace.",
    listItems: [
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Express & Standard",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Local Store Drops",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Cold Chain (CRT/FRM/HCCP)",
      },
    ],
    buttonText: "Contact Us Now",
    image: "/webp/3movers.webp", // replace with actual path
  },
  {
    title: "Return Logistics",
    subtitle: "From Warehousing to Delivery",
    description:
      "Close the Loop. Recover Value. Reduce Waste. We support our customers with tailored reverse logistics systems to handle returns, refurbishing, recycling, and asset recovery efficiently.",
    listItems: [
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Pickup and returns coordination",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Quality checks and repackaging",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Sustainable disposal and recycling",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Inventory reintegration or recall handling",
      },
    ],
    buttonText: "Talk to Our Team",
    image: "/webp/3movers.webp",
  },
  {
    title: "Pallet Management",
    subtitle: "From Warehousing to Delivery",
    description:
      "Close the Loop. Recover Value. Reduce Waste. We support our customers with tailored reverse logistics systems to handle returns, refurbishing, recycling, and asset recovery efficiently.",
    listItems: [
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Pickup and returns coordination",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Quality checks and repackaging",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Sustainable disposal and recycling",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Inventory reintegration or recall handling",
      },
    ],
    buttonText: "Talk to Our Team",
    image: "/webp/3movers.webp",
  },
  {
    title: "Fleet Management Systems",
    subtitle: "From Warehousing to Delivery",
    description:
      "Close the Loop. Recover Value. Reduce Waste. We support our customers with tailored reverse logistics systems to handle returns, refurbishing, recycling, and asset recovery efficiently.",
    listItems: [
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Pickup and returns coordination",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Quality checks and repackaging",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Sustainable disposal and recycling",
      },
      {
        icon: <CheckCircle className="text-yellow-600" />,
        title: "Inventory reintegration or recall handling",
      },
    ],
    buttonText: "Talk to Our Team",
    image: "/webp/3movers.webp",
  },
];

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

export const MissionGridData = [
  {
    title: "Customer Focus",
    description:
      "Provide tailored solutions that adapt to diverse industries and evolving supply chain needs.",
  },
  {
    title: "Excellence",
    description:
      "Uphold the highest standards in safety, efficiency, and service delivery.",
  },
  {
    title: "Innovation",
    description:
      "Leverage technology, data, and integrated operations to optimise performance and create value.",
  },
  {
    title: "Sustainability",
    description:
      "Operate responsibly with a focus on reducing environmental impact and building long-term partnerships.",
  },
  {
    title: "People",
    description:
      "Foster a culture of integrity, accountability, and continuous improvement for our team and stakeholders.",
  },
];
export const MissionData: GridAboutDataType = {
  title: "Mission",
  description:
    "To provide safe, efficient, and innovative logistics solutions that empower businesses to grow with confidence.",
  subtitle: "Core Commitments:", // <-- You can safely delete this line to test the "optional" part
  gridData: MissionGridData, // <-- We pass the grid data in here
};

export const VisionData: VisionDataType = {
  title: "Our Vision",
  description:
    "To be Australia’s most trusted and innovative logistics partner, recognised for delivery excellence, reliability, cost efficiency and exceptional customer service",
};

export const WhyLogisticsGridList = [
  {
    title: "End-to-End Operational Efficiency",
    description:
      "A single logistics partner reduces handovers, minimises errors, & accelerates turnaround times.",
  },
  {
    title: "Scalability",
    description:
      "Our integrated services grow with your business, from startups to large enterprises.",
  },
  {
    title: "Enhanced Visibility",
    description:
      "Unified systems provide real-time tracking and data-driven insights for better logistics performance.",
  },
  {
    title: "Cost Savings",
    description:
      "Owning our fleet allows us to cut third-party costs, delivering more competitive pricing for our customers.",
  },
  {
    title: "Sustainability",
    description:
      "Optimised routing, efficient transport solutions like our B-Triple system, and regular fleet maintenance lower fuel consumption and emissions.",
  },
];

export const WhyLogisticsData: GridAboutDataType = {
  title: "Why Integrated Logistics Matters",
  gridData: WhyLogisticsGridList,
};

export const CoreValuesDataList = [
  {
    icon: <HandHeart />, // Represents Commitment & Dedication
    title: "Commitment & Dedication",
    description:
      "We are committed to delivering exceptional service, building lasting relationships, and holding ourselves accountable in everything we do.",
  },
  {
    icon: <Users />, // Represents Collaboration
    title: "Collaboration",
    description:
      "We foster positive, cohesive relationships across all teams, and customers working together to achieve common goals.",
  },
  {
    icon: <MessageSquare />, // Represents Communication
    title: "Communication",
    description:
      "We prioritise transparency and open dialogue, ensuring we understand and address our customers’ challenges.",
  },
  {
    icon: <HeartHandshake />, // Represents a second instance of Commitment & Dedication with a focus on improvement
    title: "Commitment & Dedication",
    description:
      "We continually improve by seeking better ways to work, think, learn, and deliver value, driving progress in everything we do. In today's fast-moving supply chain environment, businesses need more than a transport provider, they need a partner that delivers seamless, efficient, and cost-effective solutions with end-to-end visibility.",
  },
  {
    icon: <Eye />, // Represents Customer Focus
    title: "Customer Focus",
    description:
      "Our customers are at the heart of our business. We aim to create meaningful relationships that make a real difference in their success.",
  },
  {
    icon: <Leaf />, // Represents Sustainability
    title: "Sustainability",
    description:
      "We take responsibility for protecting the environment and our resources by embracing sustainable business practices.",
  },
  {
    icon: <ShieldCheck />, // Represents Integrity & Respect
    title: "Integrity & Respect",
    description:
      "We act with honesty, fairness, and mutual respect, valuing the unique skills and perspectives each team member and customer brings.",
  },
];

// export const CoreValuesData: CoreValuesDataType = {
//   title: "Core Values",
//   values: CoreValuesDataList, // We embed the array here
// };

export const FacilitiesGridData = {
  title: "Why Choose Our Warehousing Solutions?",
  description:
    "With Gold Tiger Logistics Solutions, warehousing is not just about storing products it’s about protecting your investment, empowering your supply chain, and enabling your business to grow with confidence.",
  items: [
    {
      title: "Strategic Locations",
      description:
        "Positioned along major transport routes to reduce transit times and optimise delivery efficiency.",
      picture: "/svgs/whygtls/mappin.svg",
    },
    {
      title: "Flexible Storage Options",
      description:
        "Positioned along major transport routes to reduce transit times and optimise delivery efficiency.",
      picture: "/svgs/distribution.svg",
    },
    {
      title: "Technology-Driven Management",
      description:
        "Real-time visibility, smart inventory tracking, and reporting with our advanced Warehouse Management Systems (WMS).",
      picture: "/svgs/whygtls/tech.svg",
    },
    {
      title: "Safety & Security",
      description:
        "24/7 surveillance, controlled access, and strict compliance to keep your goods protected.",
      picture: "/svgs/whygtls/safety2.svg",
    },
    {
      title: "Value-Added Services",
      description:
        "Cross-docking, pick & pack, labelling, distribution, and reverse logistics to streamline your operations.",
      picture: "/svgs/whygtls/value.svg",
    },
  ],
};

export const LocationsData: ServiceData = {
  title: "Warehousing Locations",
  listItems: [
    {
      icon: <MapPin className="text-gold" />,
      title: "Sydney, NSW",
    },
    {
      icon: <MapPin className="text-gold" />,
      title: "Brisbane, QLD – Coming Soon",
    },
    {
      icon: <MapPin className="text-gold" />,
      title: "Melbourne, VIC",
    },
  ],
  buttonText: "Talk to Our Team",
};

export const SmartLogisticsInfo: InfoSection = {
  title: "Your Gateway to Smarter Logistics",
  description: "Everything You Need, All in One Place.",
  items: [
    {
      icon: <BarChart3 className="text-gold size-15" />,
      title: "GTRS",
      subtitle: "Gold Tiger Reporting System",
      description:
        "Your ultimate control tower for logistics insights and performance.",
      listItems: [
        {
          icon: <Check className="text-gold" />,
          title: "Real-time dashboard for shipment visibility",
        },
        {
          icon: <Check className="text-gold" />,
          title: "Access KPI, transport, and RDD reports",
        },
        {
          icon: <Check className="text-gold" />,
          title: "Analyze delivery trends and performance",
        },
      ],
    },
    {
      icon: <FileText className="text-gold size-15" />,
      title: "Terms & Conditions",
      subtitle: "Know Your Ground Rules",
      description: "Transparency is key. Here’s what guides our service:",
      listItems: [
        {
          icon: <Check className="text-gold" />,
          title: "Shipping liability terms",
        },
        {
          icon: <Check className="text-gold" />,
          title: "Handling & delivery policies",
        },
        {
          icon: <Check className="text-gold" />,
          title: "Dispute resolution protocols",
        },
      ],
    },
    {
      icon: <HelpCircle className="text-gold size-15" />,
      title: "FAQ",
      subtitle: "Quick Answers to Common Questions",
      description: "Save time with our comprehensive help center.",
      listItems: [
        { icon: <Check className="text-gold" />, title: "Delivery & tracking" },
        { icon: <Check className="text-gold" />, title: "Account access" },
        {
          icon: <Check className="text-gold" />,
          title: "Documentation & POD retrieval",
        },
      ],
    },
    {
      icon: <Lock className="text-gold size-15" />,
      title: "Self-Service Portal",
      subtitle: "Independence Made Easy",
      description:
        "Do it yourself with a platform that’s built for speed and control.",
      listItems: [
        {
          icon: <Check className="text-gold" />,
          title: "Update account information",
        },
        {
          icon: <Check className="text-gold" />,
          title: "Submit support tickets",
        },
        {
          icon: <Check className="text-gold" />,
          title: "Retrieve documents anytime",
        },
      ],
    },
  ],
};

export const MessageBannerdata: MessageBannerData = {
  title: "Message From The Director",
  titleColor: "text-gold",
  quote:
    "At Gold Tiger Logistics Solutions, our mission has always been simple: to provide reliable, efficient, and innovative logistics solutions that our clients can depend on. Over the years, we have grown from a single truck operation into a fully integrated logistics company, delivering freight, warehousing, and supply chain services across Australia. Our success is built on the dedication of our people, the strength of our fleet, and our commitment to leveraging technology to create smarter, more transparent logistics solutions. Every decision we make is guided by a focus on safety, operational excellence, and customer satisfaction. We understand that logistics is more than moving goods it’s about building lasting partnerships, solving challenges proactively, and supporting the growth of our clients’ businesses. At Gold Tiger, we take pride in being more than a service provider; we are a trusted partner in every journey. Thank you for choosing Gold Tiger. We look forward to driving your business forward safely, efficiently, and reliably.",
  directorName: "Imad El Masri",
  directorPosition: "Director, Gold Tiger Logistics Solutions",
  directorImage: "/svgs/imadVertical.svg",
};

export const teamProfiles: ProfileItem[] = [
  {
    title: "Imad El Masri",
    description: "Managing Director",
    imageSrc: "/webp/imad.webp",
  },
  {
    title: "Sarah Johnson",
    description: "Chief Executive Officer",
    imageSrc: "/webp/imad.webp",
  },
  {
    title: "Michael Tan",
    description: "Chief Operating Officer",
    imageSrc: "/webp/imad.webp",
  },
  {
    title: "Laura Smith",
    description: "Chief Financial Officer",
    imageSrc: "/webp/imad.webp",
  },
];

export const OurTeamData: OurTeamDataType = {
  title: "Meet Our Team",
  description:
    "Our people are the heart of Gold Tiger Logistics. Skilled, dedicated, and passionate. They’re the ones keeping your supply chain moving every day.",
  profiles: teamProfiles, // Embed the array here
};
export const ExpansionValues: ExpansionDataType = {
  title: "Why This Expansion Matters",
  points: [
    {
      title: "Meeting Growth Demand",
      description:
        "Driven by customer growth and evolving freight requirements, our expanded and doubled B-Triple fleet enhances capacity, reduces turnaround times, and supports greater freight efficiency.",
    },
    {
      title: "Enhanced Reliability",
      description:
        "The fleet expansion allows for optimized payloads, fewer trips, and faster, more sustainable deliveries across Australia’s busiest transport corridors.",
    },
    {
      title: "Sustainability Commitment",
      description:
        "By maximizing load capacity and minimizing total trips, our B-Triple operations help lower fuel usage and CO₂ emissions, aligning with Gold Tiger’s dedication to a greener supply chain.",
    },
    {
      title: "Cost-Effective Operations",
      description:
        "With a company-owned fleet and integrated logistics model, we maintain control over costs while ensuring exceptional service quality and dependability.",
    },
    {
      title: "Seamless End-to-End Service",
      description:
        "Our extended network ensures customers receive consistent, on-time deliveries — reinforcing Gold Tiger’s reputation for reliability and excellence.",
    },
    {
      title:
        "Our B-Triple fleet expansion represents a major milestone in our growth journey",
      description:
        "A reflection of our customers’ trust and our ongoing commitment to innovation, sustainability, and operational excellence.",
    },
  ],
};

export const home_page_data = await getHomePageData();

export const about_page_data = await getAboutUsPageData();

export const b_triple_page_data = await getBTriplePageData();

export const industry_page_data = await getIndustryPageData();

export const sustainability_page_data = await getSustainabilityPageData();

export const transport_page_data = await getTransportPageData();

export const warehousing_page_data = await getWarehousingPageData();

export const BTriplesData: BTriplesDataType = {
  title: "Key Benefits of Our B-Triple Solution",
  Sections: [
    {
      icon: "Truck",
      title: "Higher Load Capacity",
      description:
        "With an additional trailer, our B-Triples move significantly more freight per trip — ideal for customers managing large-volume shipments or high-frequency distribution needs.",
    },
    {
      icon: "Save",
      title: "Safe Handling of Fragile Goods",
      description:
        "Each trailer is fitted with adjustable mezzanine floors, allowing the safe transport of delicate or fragile products that cannot be double stacked, ensuring your goods arrive in perfect condition.",
    },
    {
      icon: "Fuel",
      title: "Enhanced Fuel Efficiency",
      description:
        "With an additional trailer, our B-Triples move significantly more freight per trip — ideal for customers managing large-volume shipments or high-frequency distribution needs.",
    },
    {
      icon: "Map",
      title: "Extended Reach",
      description:
        "Our expanded B-Triple network now connects major eastern and southern routes, enabling faster and more consistent delivery over longer distances.",
    },
    {
      icon: "HardHat",
      title: "Reliability and Safety",
      description:
        "Safety remains at the forefront of every journey. Our B-Triple trucks are equipped with advanced monitoring systems, and our drivers undergo specialized training to ensure precision, control, and care on every route.",
    },
  ],
};
