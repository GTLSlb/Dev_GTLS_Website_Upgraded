import { ReactNode } from "react";

export type FloatingBannerProps = {
  iconSrc: string;
  text: string;
  className?: string;
};

export type HeroProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  className?: string;
  cornerText?: string;
  contain?: boolean;
  link?: string;
  color?: "gold" | "green";
};

export type BannerPropsItem = {
  title: string;
  subtitle: string;
};

export type BannerDataType = {
  title: string;
  description: string;
  items: BannerPropsItem[];
  imageSrc: string;
  imageAlt?: string;
};

export type MessageBannerData = {
  title: string;
  titleColor?: string;
  quote: string;
  directorName: string;
  directorPosition: string;
  directorImage: string;
};
