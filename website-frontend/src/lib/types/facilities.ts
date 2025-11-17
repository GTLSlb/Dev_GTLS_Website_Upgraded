import { StrapiMediaFile } from "./media";

export type FacilitiesItem = {
  id: number;
  title: string;
  description: string;
  picture: string;
  icon: StrapiMediaFile;
};

export type FacilitiesDataType = {
  title: string;
  description: string;
  buttonText?: string;
  data: FacilitiesItem[];
};
