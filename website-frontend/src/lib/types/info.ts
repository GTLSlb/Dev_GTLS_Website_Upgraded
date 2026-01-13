import { ReactNode } from "react";

export type InfoListItem = {
  icon?: ReactNode;
  title: string;
};

export type InfoItem = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  listItems: InfoListItem[];
};

export type InfoSection = {
  title: string;
  description: string;
  items: InfoItem[];
};
