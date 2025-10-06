import TextWrapper from "@/lib/components/Common/TextWrapper";
import { BorderedGridItemProps } from "@/lib/types";
import React from "react";

const GridItem: React.FC<BorderedGridItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col border-l-2 border-gold pl-4">
      <TextWrapper text={title} fontFamily="funnel" styleType="title4" className="text-gold" />
      <TextWrapper text={description} fontFamily="dmSans" styleType="bodySmall" className="leading-snug" />
    </div>
  );
};

export default GridItem;