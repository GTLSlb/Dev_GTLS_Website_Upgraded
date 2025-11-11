import { CoreValuesDataType, IndustriesDataArray, OurStoryDataType, VisionDataType } from "./content";
import { GridAboutDataType } from "./grids";
import { CommonHeroDataType } from "./hero";
import { BTriplesDataType } from "./safetyCompliance";

export type BTripPageData = {
    id: number;
    documentId: string;
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    publishedAt: string; // ISO 8601 date string
    HeroSection: CommonHeroDataType;
    KeyBenefits: BTriplesDataType;
    // Add any other components that might be in the 'populate=*' response
}

export interface AboutUsPageData {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    HeroSection: CommonHeroDataType;
    Footer: any | null; // Placeholder
    Navbar: any | null; // Placeholder
    OurStory: OurStoryDataType;
    Mission: GridAboutDataType; // This is returned as an array []
    OurVision: VisionDataType;
    CoreValues: CoreValuesDataType;
}


export type IndustryPageData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  HeroSection: CommonHeroDataType;
  Services: IndustriesDataArray;
}