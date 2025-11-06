export type FacilitiesItem = {
  title: string;
  description: string;
  picture: string;
};

export type FacilitiesProps = {
  title: string;
  description: string;
  buttonText?: string;
  items: FacilitiesItem[];
};
