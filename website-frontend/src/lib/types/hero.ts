export type HeroDataType = {
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
};

export type CommonHeroDataType = {
  /** Main heading text */
  title: string;

  /** Optional secondary heading */
  subtitle?: string;

  /** Description paragraph */
  description?: string;

  /** Hero image path */
  imageSrc?: string;

  /** Optional CTA link */
  link?: string;

  /** Optional text that appears in a corner of the hero */
  cornerText?: string;

  /** Optional color variant (if your component supports different themes) */
  color?: "gold" | "green";
};