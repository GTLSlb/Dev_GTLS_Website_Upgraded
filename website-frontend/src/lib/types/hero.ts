import { StrapiMediaFile } from "./media";

export type HeroDataType = {
  Title: string;
  Subtitle: string;
  Description: string;
  cornerText?: string;
  videoSrc?: string;
  Media?: StrapiMediaFile;
};

export type CommonHeroDataType = {
  /** Main heading text */
  Title: string;

  /** Optional secondary heading */
  Subtitle?: string;

  /** Description paragraph */
  Description?: string;

  /** Hero image path */
  Media: StrapiMediaFile;

  /** Optional CTA link */
  link?: string;

  /** Optional text that appears in a corner of the hero */
  cornerText?: string;

  /** Optional color variant (if your component supports different themes) */
  color?: "gold" | "green";
};