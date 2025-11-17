import { StrapiMediaFile } from "./media";

export type NewsSliderDataType = {
  title: string;
  description: string;
  buttonText: string;
  SliderItems: RecentNewsDataType[];
};

export type RecentNewsCardProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
};

export type RecentNewsDataType = {
  id: number;
  name: string;
  position: string;
  img: StrapiMediaFile;
};

export type RecentPostsDataType = {
  title: string;
  items: RecentNewsCardProps[];
};
