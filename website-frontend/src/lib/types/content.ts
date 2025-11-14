import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { StrapiMediaFile } from "./media";

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
  icon: StrapiMediaFile;
  title: string;
  description: string;
};

export interface GridCardItem {
    id: number;
    gridcard_id: number | null;
    title: string;
    description: string;
    content: string | null;
    footer: string | null;
}

export interface WhyLogisticsDataType {
    id: number;
    title: string;
    description: string | null;
    Subtitle: string | null;
    GridCard: GridCardItem[];
}

export interface MessageDirectorDataType {
    id: number;
    title: string;
    content: string;
    imgSrc: string;
    subtitle: string | null;
    Img: StrapiMediaFile;
    Sections: any[];
}

export interface TeamMember {
    id: number;
    title: string;
    description: string;
    buttonText: string | null;
}

export interface MeetTeamDataType {
    id: number;
    title: string;
    description: string;
    Members: TeamMember[];
}

export interface WhyGtlsUnevenGridItem {
    id: number;
    title: string;
    description: string;
    buttonText: string | null;
}

export interface WhyGtlsDataType {
    id: number;
    WhyGtlsItem: any[];
    UnevenGrid: WhyGtlsUnevenGridItem[];
    WarehouseMap: any[];
}

export type CoreValuesDataType = {
    id: number;
    title: string;
    CoreValueItem: CoreValue[];
    WhyLogistics: WhyLogisticsDataType;
    MessageDirector: MessageDirectorDataType;
    MeetTeam: MeetTeamDataType;
    WhyGtls: WhyGtlsDataType[];
}



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
  Img: StrapiMediaFile; // Allows for path strings OR static imports
};

export type VisionDataType = {
  title: string;
  description: string;
};

export interface TSectionItem {
  imgSrc: string;
  title: string;
  subtitle?: string;
  content: string;
}

export type IndustriesDataArray = TSectionItem[];

export type RecyclingDataType = TSectionItem;
export type GreenPracticesDataType = TSectionItem;

export interface TSectionData {
  title: string;
  image: string;
  description: string;
}