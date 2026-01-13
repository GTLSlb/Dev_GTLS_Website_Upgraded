import { ServiceItem } from "./cards";

export type ServicesDataType = {
  title: string;
  ServicesGrid: {
    id: number;
    title: string;
    description: string;
    Subtitle: string;
    GridCard: ServiceItem[];
  };
};
