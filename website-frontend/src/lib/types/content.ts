import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type ContentListNumber = {
  label: string;
  value: string;
};

export type ContentListItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ContentListType = {
  title: string;
  subtitle: string;
  description: string;
  numbers?: ContentListNumber[];
  list: ContentListItem[];
};

export type CenterTitleProps = {
  title: string;
  className?: string;
  subtitle?: string;
  description?: string;
  button?: ReactNode;
  dark?: boolean;
  buttonText?: string;
  titleColor?: string;
  onButtonClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
  placement?: "left" | "center" | "right";
  buttonVariant?:
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  listItems?: { icon?: ReactNode; title: string }[];
};

export type CoreValue = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type CoreValuesDataType = {
  title: string;
  values: CoreValue[]; // An array of the type you defined
};

export type Expansion = {
  heading: string;
  description: string;
};

export type WhyGtlsItem = {
  title: string;
  picture: string;
};

export type WhyGtlsDataTypes = {
  /** Main section title */
  title: string;

  /** Short subtitle or description */
  description?: string;

  /** Optional call-to-action button text */
  buttonText?: string;

  /** Background image (like the tiger.svg in your section) */
  backgroundImage?: string;

  /** List of Why GTLS feature items */
  items: WhyGtlsItem[];
};

export type OurStoryDataType = {
  title: string;
  content: string;
  imgSrc: string; // Allows for path strings OR static imports
};

export type VisionDataType = {
  title: string;
  description: string;
};