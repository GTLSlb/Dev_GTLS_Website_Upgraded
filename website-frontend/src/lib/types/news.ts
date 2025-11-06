export type NewsItem = {
  title: string;
  description: string;
  imageSrc: string;
};

export type NewsSliderDataType = {
  title: string;
  description: string;
  buttonText: string;
  news: NewsItem[];
};

export type RecentNewsCardProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
};

export type RecentNewsProps = {
  items: RecentNewsCardProps[];
};
