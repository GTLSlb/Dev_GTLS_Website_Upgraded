export type FacilitiesItem = {
  title: string;
  description: string;
  picture: string;
};

export type FacilitiesDataType = {
  title: string;
  description: string;
  buttonText?: string;
  items: FacilitiesItem[];
};
