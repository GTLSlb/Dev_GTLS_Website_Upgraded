import { BorderedGridProps } from "@/lib/types/cards";
import GridItem from "./GridItem";

const BorderedGrid = ({ data }: BorderedGridProps) => {
  return (
    <div className="border  rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
      {data?.map((item) => (
        <GridItem
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
export default BorderedGrid;
