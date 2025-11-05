import TextWrapper from "@/lib/components/Common/TextWrapper";
import {  Expansion } from "@/lib/types";
import { Circle } from "lucide-react";

const ExpansionCard: React.FC<{ value: Expansion; index: number }> = ({
  value,
  index,
}) => {

  if(index===5) return (<div
      className={`p-6 gap-4 rounded-3xl shadow-lg flex flex-col`}
    >
      <TextWrapper
        text={value.heading}
        fontFamily="dmSans"
        styleType="title4"
        className="text-black"
      />
      <TextWrapper
        text={value.description}
        fontFamily="dmSans"
        styleType="body"
      />
    </div>)

  return (
    <div
      className={`p-6 gap-4 transition rounded-3xl duration-300 hover:shadow-xl flex flex-col`}
    >
      <Circle className="text-gold" size={15} />
      <TextWrapper
        text={value.heading}
        fontFamily="funnel"
        styleType="title4"
        className="text-gold"
      />
      <TextWrapper
        text={value.description}
        fontFamily="dmSans"
        styleType="body"
      />
    </div>
  );
};
export default ExpansionCard;
