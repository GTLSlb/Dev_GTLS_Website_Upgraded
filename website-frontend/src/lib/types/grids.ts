export type TGridItem = {
  title: string;
  description: string;
};

export type GridAboutDataType = {
  title: string;
  description?: string;
  subtitle?: string; // <-- This property is now optional
  gridData: TGridItem[];      // <-- An array of the type we just defined
};