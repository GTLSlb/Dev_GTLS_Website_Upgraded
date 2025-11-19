import { HorizontalCardProps } from "@/lib/types";
import Image from "next/image";
import TextWrapper from "./TextWrapper";

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  imgSrc,
  title,
  subtitle,
  description,
  color = "gold",
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:justify-between md:flex-row gap-4">
        <div className="md:w-44">
          <div className="relative h-20 w-20 rounded-full overflow-hidden">
            <Image src={imgSrc} alt={title} fill className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-2 md:w-1/2">
          <TextWrapper
            text={title}
            fontFamily="funnel"
            styleType="title2"
            className={`text-${color}`}
          />
          <TextWrapper
            text={subtitle}
            fontFamily="dmSans"
            styleType="subtitle"
          />
        </div>
        <TextWrapper
          text={description}
          fontFamily="dmSans"
          styleType="bodySmall"
          className="md:w-96"
        />
      </div>
      <div className="w-full h-0.25 mt-7 bg-gray-300"></div>
    </div>
  );
};

export default HorizontalCard;
