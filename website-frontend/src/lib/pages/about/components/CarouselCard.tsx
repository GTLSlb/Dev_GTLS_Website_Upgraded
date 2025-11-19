import TextWrapper from "@/lib/components/Common/TextWrapper";
import { SliderItem } from "@/lib/types";
import { ArrowRight } from "lucide-react";

const CarouselCard: React.FC<SliderItem> = ({ title, description, date }) => {
  return (
    <div>
      <div className="flex gap-4 items-center mb-4">
        <TextWrapper
          text={date}
          fontFamily="funnel"
          styleType="title3"
          className="text-gold"
        />
        <div className="w-full h-0.5 bg-gray-300"></div>
        <ArrowRight className="size-8 text-gold" />
      </div>

      <div className="flex flex-col gap-2">
        <TextWrapper
          text={title}
          fontFamily="dmSans"
          styleType="title4"
          className=""
        />
        <TextWrapper
          text={description}
          fontFamily="dmSans"
          styleType="bodySmall"
          className="text-gray-600"
        />
      </div>
    </div>
  );
};
export default CarouselCard;
