import { CommonHeroDataType, HeroDataType } from "./hero";
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
  name?: string;
  position?: string;
  img?: StrapiMediaFile;
  coverImg: StrapiMediaFile;
  title: string;
  description: string;
  date: string;
  href: string;
};

export type RecentPostsDataType = {
  title: string;
  items: RecentNewsCardProps[];
};

export interface NewsLetterType {
  id: number;
  title: string;
  buttonText: string;
  description: string;
}

export interface NewsItem {
  id: number;
  documentId: string;
  title: string;
  description: string;
  newsDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  coverImg: StrapiMediaFile;
  mediaContent: StrapiMediaFile[];
  textContent: string;
  category: string;
}

export interface RecentNewsType {
  id: number;
  title: string;
  news_items: NewsItem[];
}

export interface PostItem {
  id: number;
  documentId: string;
  title: string;
  description: string;
  date: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: StrapiMediaFile; // reusing Media type
}

export interface PostsType {
  id: number;
  title: string;
  posts: PostItem[];
}

export interface NewsPage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Posts: PostsType;
  HeroSection: CommonHeroDataType;
  NewsLetter: NewsLetterType;
  RecentNews: RecentNewsType;
}
