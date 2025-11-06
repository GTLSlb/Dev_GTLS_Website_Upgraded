import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export type GridCardProps = {
  id: number;
  title: string;
  icon: string;
  description: string;
  content: string;
  footer: string;
};

export type HorizontalCardProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
  color?: string;
};

export type IconListItem = {
  icon: React.ReactNode; // can be any JSX element
  description: string;
};

export type CustomerHubCardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  list?: IconListItem[];
  iconColor?: string;
  children?: ReactNode;
};

export type NewsCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export type ProfileCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export type RecentNewsCardProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
};

export type RecentPostsCardProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
};

export type BorderedGridItemProps = {
  title: string;
  description: string;
};

export type BorderedGridProps = {
  data: BorderedGridItemProps[];
};

export type FeatureListItem = {
  icon: ReactNode;
  description: string;
};

export type FeatureCard = {
  imageSrc: string;
  title: string;
  subtitle: string;
  list: FeatureListItem[];
};

export type ServiceItem = {
  /** Unique numeric identifier for the service */
  id: number;

  /** Service title */
  title: string;

  /** Icon name or path (e.g. '/svgs/truck.svg') */
  icon: string;

  /** Short tagline or intro */
  description: string;

  /** Main detailed content */
  content: string;

  /** Optional footer or tagline */
  footer: string;
};

export type ServicesList = {
  Data: ServiceItem[];
};

export type CustomerHubDataType = {
  title: string;
  description?: string;
  buttonText?: string;
  list: FeatureCard[];
};

export type CardData = {
  Data: [];
};
