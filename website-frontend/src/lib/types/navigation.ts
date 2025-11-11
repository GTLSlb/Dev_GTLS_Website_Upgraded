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
    email_input: any | null; // Based on sample, assuming this is a placeholder or rich text/boolean
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
    Footer: FooterComponent; 
}