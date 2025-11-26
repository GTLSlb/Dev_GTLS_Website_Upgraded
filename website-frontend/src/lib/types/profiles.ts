export type ProfileItem = {
  title: string;
  description: string;
  imageSrc: string;
};

export type ProfileSliderProps = {
  items: ProfileItem[];
};

export type OurTeamDataType = {
  title: string;
  description: string;
  profiles: ProfileItem[]; // An array of the ProfileItem type
};