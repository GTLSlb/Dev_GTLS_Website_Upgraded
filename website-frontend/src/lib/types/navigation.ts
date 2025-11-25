import { StrapiMediaFile } from "./media";

export type NavLink = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export type NavigationConfig = {
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  links: NavLink[];
};

export type MenuItem = {
  label: string;
  link: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};


export interface FooterMenuItemLink {
    id: number;
    label: string;
    link: string;
}

export interface FooterMenuColumn {
    id: number;
    title: string;
    items: FooterMenuItemLink[];
}

// --- Socials Types ---

export interface SocialMediaIconItem {
    id: number;
    // The Icon is the actual populated media file structure
    Icon: StrapiMediaFile; 
    // You might add a link field here if your Strapi component has one
}

export interface SocialsComponent {
    id: number;
    SocialMediaItem: SocialMediaIconItem[];
}

// --- Main Footer Component Type ---

export interface FooterComponent {
    id: number;
    description: string;
    // The logo field is a single non-repeatable media relation
    logo: StrapiMediaFile; 
    footerMenu: FooterMenuColumn[];
    Socials: SocialsComponent;
}

// --- Main Page Type (Global Footer Data) ---

export interface FooterPageData {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    // The main Footer component is directly accessible
    Footer: FooterContent; 
}

export type QuickLinkItem = {
  label: string;
  link?: string | null;
  document?: string | null;
};

export type SocialItem = {
  id: number | string;
  link: string | null;
  Icon: {
    url: string;
    name?: string;
    alternativeText?: string;
  };
};

export type FooterMenuItem = {
  label: string;
  isDocument: boolean;
  link: string | { url: string } | null;
};
export type FooterSection = {
  title: string;
  items: FooterMenuItem[];
};
export type LocationItem = {
  city: string;
  street: string;
  suburb: string;
  state: string;
  postalCode: string;
};
export type FooterContent = {
  logo: StrapiMediaFile;

  description: string;

  Socials: {
    SocialMediaItem: SocialItem[];
  };

  footerMenu: {
    QuickLinks: {
      title: string;
      linkitems: QuickLinkItem[];
    };

    OurServices: {
      title: string;
      serviceitems: QuickLinkItem[];
    };

    Legal: {
      title: string;
      legalitems: QuickLinkItem[];
    };

    Locations: {
      title: string;
      LocationItem: LocationItem[];
    };
  };
}


// Navigation Item
export interface NavItem {
  id: number;
  label: string;
  href: string;
}


// Content
export interface NavbarContent {
  id: number;
  NavItems: NavItem[];        // same here
  Logo: StrapiMediaFile;
}

// Data wrapper
export interface DataWrapper {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Content: NavbarContent;
}

// Final API Response
export interface NavbarApiResponse {
  data: DataWrapper;
  // eslint-disable-next-line
  meta: Record<string, any>;
}