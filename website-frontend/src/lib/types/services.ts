import { ReactNode } from "react";
import { StrapiMediaFile } from "./media";

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

export type WarehousingDataType = {
  id: number;
  title: string;
  description: string;
  quote: string;
  data: LocationListItem[];
}

export type LocationListItem = {
  id: number;
  title: string;
  description: string;
  icon: StrapiMediaFile;
}