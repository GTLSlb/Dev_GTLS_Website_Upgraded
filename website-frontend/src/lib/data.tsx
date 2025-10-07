import {
  Check,
  CheckCircle,
  Eye,
  HandHeart,
  HeartHandshake,
  Leaf,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  GridCardProps,
  IntegratedSolutionsItem,
  Location,
  MenuSection,
  NavigationConfig,
  WhyGtlsItem,
} from "./types";

export const navigationConfig: NavigationConfig = {
  logo: {
    src: "/Logos/logo-transparent.svg",
    alt: "Gold Tiger",
    width: 120,
    height: 50,
  },
  links: [
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
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Safety & Environment",
      href: "/environment&compliance",
    },

    {
      label: "Customer Hub",
      href: "/customer-hub",
    },
    {
      label: "Contact Us",
      href: "/contactus",
    },
  ],
};

export const serviceData: GridCardProps[] = [
  {
    id: 1,
    title: "Transport",
    icon: "/svgs/transport.svg",
    description: "Building modern, responsive websites.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    footer: "Learn More",
  },
  {
    id: 2,
    icon: "/svgs/warehousing.svg",
    title: "Warehousing",
    description: "Creating native and cross-platform mobile apps.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    footer: "Get a Quote",
  },
  {
    id: 3,
    icon: "/svgs/distribution.svg",
    title: "Distribution",
    description: "Creating native and cross-platform mobile apps.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    footer: "Get a Quote",
  },
  {
    id: 4,
    icon: "/svgs/ftl.svg",
    title: "FTL & LTL Solutions",
    description: "Creating native and cross-platform mobile apps.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    footer: "Get a Quote",
  },
];

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

export const WhyGtlsData: WhyGtlsItem[] = [
  {
    title: "Integrated Model",
    picture: "/svgs/whygtls/integration.svg",
  },
  {
    title: "Technology",
    picture: "/svgs/whygtls/cpu.svg",
  },
  {
    title: "Safety & Compliance",
    picture: "/svgs/whygtls/safety.svg",
  },
  {
    title: "Partners",
    picture: "/svgs/whygtls/partners.svg",
  },
  {
    title: "Accreditations",
    picture: "/svgs/whygtls/accreditations.svg",
  },
  {
    title: "Environment & Sustainability",
    picture: "/svgs/whygtls/eco-friendly.svg",
  },
  {
    title: "B-Triple",
    picture: "/svgs/whygtls/lorry.svg",
  },
  {
    title: "Workshops",
    picture: "/svgs/whygtls/workshops.svg",
  },
];

export const CustomerHubData = [
  {
    imageSrc: "/svgs/gtrs.svg",
    title: "GTRS",
    subtitle: "Gold Tiger Reporting System",
    list: [
      {
        icon: <Check />,
        description: "Real-time dashboard for shipment visibility",
      },
      {
        icon: <Check />,
        description: "Access KPI, transport, and RDD reports",
      },
      {
        icon: <Check />,
        description: "Analyze delivery trends and performance",
      },
    ],
  },
  {
    imageSrc: "/svgs/terms&conditions.svg",
    title: "Terms & Conditions",
    subtitle: "Know Your Ground Rules",
    list: [
      { icon: <Check />, description: "Shipping liability terms" },
      { icon: <Check />, description: "Handling & delivery policies" },
      { icon: <Check />, description: "Dispute resolution protocols" },
    ],
  },
  {
    imageSrc: "/svgs/faq.svg",
    title: "FAQ",
    subtitle: "Quick Answers to Common Questions",
    list: [
      { icon: <Check />, description: "Delivery & tracking" },
      { icon: <Check />, description: "Account access" },
      { icon: <Check />, description: "Documentation & POD retrieval" },
    ],
  },
  {
    imageSrc: "/svgs/portal.svg",
    title: "Portal Login",
    subtitle: "Manage Your Account Online",
    list: [
      {
        icon: <Check />,
        description: "Real-time dashboard for shipment visibility",
      },
      {
        icon: <Check />,
        description: "Access KPI, transport, and RDD reports",
      },
      {
        icon: <Check />,
        description: "Analyze delivery trends and performance",
      },
    ],
  },
  {
    imageSrc: "/svgs/lock.svg",
    title: "Self-Service Portal",
    subtitle: "Independence Made Easy",
    list: [
      { icon: <Check />, description: "Update account information" },
      { icon: <Check />, description: "Submit support tickets" },
      { icon: <Check />, description: "Retrieve documents anytime" },
    ],
  },
];

export const NewsData = [
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
];

export const HistoryData = [
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

export const BannerAboutData = {
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

export const OurStoryData = {
  title: "Our Story",
  content:
    "Founded in 2006, Gold Tiger Logistics Solutions (Gold Tiger) has grown into one of Australia’s leading transport and logistics companies.\n\n Over the years, we have expanded our capabilities to provide efficient, reliable, and nationwide logistics solutions, combining industry expertise with advanced technology. We operate a fully owned fleet supported by a skilled workforce of drivers and logistics professionals. Our operations leverage state-of-the-art fleet management systems, GPS tracking, and advanced scheduling technologies to ensure every shipment is monitored, optimized, and delivered safely and on time. Our commitment to excellence is strengthened by our gold partner extended warranty with Volvo, which includes a rigorous maintenance schedule to manufacturer standards using OEM parts, 24-hour nationwide breakdown support, and replacement vehicles if trucks are off the road. All vehicles are serviced regularly by qualified mechanics in our on-site workshops. At Gold Tiger, customer satisfaction is at the heart of everything we do. From proactive communication and tracking to responsive support. We ensure our clients have complete visibility and confidence in their logistics solutions. Combining technology, experience, and a dedication to operational reliability, we deliver transport solutions that are safe, efficient, and dependable.",
  imgSrc: "/webp/contactus.webp",
};

export const IndustriesData = [
  {
    imgSrc: "/globe.svg",
    title: "Printing",
    subtitle: "Fast, Flexible, Everywhere.",
    description:
      "From high-street to online retail, we help you stay ahead with rapid distribution, scalable warehousing, and real-time tracking to meet changing customer demand.",
  },
  {
    imgSrc: "/globe.svg",
    title: "Food & Beverage",
    subtitle: "Fresh. Safe. On Time.",
    description:
      "We support food producers with temperature-controlled options, efficient B-Triple transport, and compliance-ready solutions across the supply chain.",
  },
  {
    imgSrc: "/globe.svg",
    title: "Health & Beauty",
    subtitle: "Care That Delivers.",
    description:
      "From cosmetics to medical-grade products, our secure handling and precise inventory systems protect your brand — and your customers.",
  },
  {
    imgSrc: "/globe.svg",
    title: "Fast-Moving Consumer Goods (FMCG)",
    subtitle: "High Volume. High Velocity.",
    description:
      "GTLS is built for the pace of FMCG. We handle large-volume SKU movement with intelligent pallet management, automation, and corridor-optimized distribution.",
  },
];

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
    picture: "/svgs/ftl.svg",
  },
  {
    title: "Order Fulfilment & Transport",
    description:
      "Pick, pack, and deliver with speed and accuracy across all networks.",
    picture: "/svgs/ftl.svg",
  },
  {
    title: "Delivery + Returns",
    description:
      "Seamless final-mile delivery with efficient return handling built-in.",
    picture: "/svgs/ftl.svg",
  },
];

export const ServicesData = [
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

export const news = [
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
];

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

export const WhyLogisticsGridData = [
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

export const CoreValuesData = [
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
