import { ReactNode } from "react";
import { StrapiMediaFile } from "./media";

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
  description: string;
};

export type BannerDataType = {
  title: string;
  description: string;
  IntegratedModelItem: BannerPropsItem[];
  ImgSrc: StrapiMediaFile;
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
