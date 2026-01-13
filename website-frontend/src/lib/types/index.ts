
import { StrapiMediaFile } from "./media";

export type IntegratedSolutionsType = {
  id: number;
  SolutionsCards: SolutionsCardsType;
};

export type TransportListItem = {
  id: number;
  title: string;
  icon?: StrapiMediaFile;
};

export type transportServicesType = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: StrapiMediaFile;
  transportlistItems: TransportListItem[];
};

export type SolutionsCardsType = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  subtitle: string | null;
  CustomerHubCard: CustomerHubCard[];
};

export type CustomerHubCard = {
  id: number;
  title: string;
  subtitle: string;
  imageSrc: string | null;
  img: StrapiMediaFile;
  CustomerHubList: [];
};

export interface CenterTitleProps {
  title: string;
  link?: string;
  className?: string;
  subtitle?: string;
  description?: string; // The `?` makes this property optional
  button?: React.ReactNode; // `React.ReactNode` is a great type for optional elements like a button
  dark?: boolean; // Optional prop to switch to dark mode styles
  buttonText?: string;
  titleColor?: string;
  onButtonClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
  placement?: "left" | "center" | "right"; // new prop
  buttonVariant?:
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined; // new prop
  listItems?: { icon?: StrapiMediaFile; title: string }[];
  icon?: StrapiMediaFile;
}

export interface WhyGtlsItem {
  id: number;
  title: string;
  description?: string;
  icon: StrapiMediaFile;
}

export interface UnevenGridProps {
  items: WhyGtlsItem[];
}

export interface IconListItem {
  icon: StrapiMediaFile;
  description: string;
}

export interface IconListProps {
  items: IconListItem[];
}

export interface CustomerHubCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  CustomerHubList?: IconListItem[]; // optional array for IconList
  iconColor?: string; // arrow icon color
  children?: React.ReactNode; // optional additional content
  img?: StrapiMediaFile;
}




