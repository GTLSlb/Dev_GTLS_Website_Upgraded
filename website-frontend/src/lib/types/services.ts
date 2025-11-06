import { ReactNode } from "react";

export type ServiceListItem = {
  icon: ReactNode;
  title: string;
};

export type ServiceData = {
  title: string;
  subtitle?: string;
  description?: string;
  listItems: ServiceListItem[];
  buttonText: string;
  image?: string;
};
