import Image from "next/image";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { HeroProps } from "@/lib/types";
import { MoveUpRight } from "lucide-react";

const CommonHero = ({
  title = "Global Transport & Logistics Solutions",
  subtitle = "Move More. Spend Less. Reduce Emissions.",
  description = "We provide end-to-end logistics solutions across Australia, with a focus on efficiency, safety, and sustainability. From local freight to long-haul BTriple operations, GTLS keeps your business moving.",
  imageSrc = "/webp/3movers.webp", // ✅ fallback image
  cornerText = "Talk with an expert",
  className,
  color = "gold",
}: HeroProps) => {
  return (
    <SectionContainer
      className={`flex flex-col gap-10 !pt-28 mt-10 ${className ?? ""}`}
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Title/Subtitle */}
        <div className="flex md:flex-col md:w-7/12 gap-2">
          <TextWrapper
            text={title}
            fontFamily="funnel"
            styleType="title2"
            className={`${color === "gold" ? "text-dark-gold" : "text-green"} min-w-xs`}
          />
          <TextWrapper
            text={subtitle}
            fontFamily="dmSans"
            styleType="title4Reg"
            className="hidden md:block max-w-md"
          />
        </div>

        {/* Divider */}
        <div className={`w-10 h-0.5 hidden md:block ${color === "gold" ? "bg-dark-gold" : "bg-green"} mt-4`}></div>

        {/* Description */}
        <div className="md:w-5/12">
          <TextWrapper
            text={description}
            fontFamily="dmSans"
            styleType="body"
            className="max-w-2xl"
          />
        </div>
      </div>

      {/* Hero Image instead of Video */}
      <div className="relative w-full h-[500px] rounded-4xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover rounded-4xl"
        />
        <div className={`${color === "gold" ? "bg-light-gold" : "bg-green"} h-16 w-auto p-4 min-w-[250px] absolute bottom-0 right-0 rounded-tl-3xl hover:cursor-pointer`}>
          <div className="flex gap-2 justify-between items-center">
            <TextWrapper
              text={cornerText}
              fontFamily="dmSans"
              styleType="title4Reg"
              className="text-white"
            />
            <MoveUpRight className="size-5 text-white" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CommonHero;
