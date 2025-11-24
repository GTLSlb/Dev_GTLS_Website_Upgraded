export type TGridItem = {
  title: string;
  description: string;
};

export type GridAboutDataType = {
  title: string;
  description?: string;
  subtitle?: string; // <-- This property is now optional
  CoreCommitmentsItem: TGridItem[];      // <-- An array of the type we just defined
};

export type WhyAboutDataType = {
  title: string;
  description?: string;
  subtitle?: string; // <-- This property is now optional
  WhyLogisticsItem: TGridItem[];      // <-- An array of the type we just defined
};
/**
 * Defines the full structure for the exported ExpansionValues object.
 */
export interface ExpansionDataType {
  title: string;
  points: TGridItem[];
}