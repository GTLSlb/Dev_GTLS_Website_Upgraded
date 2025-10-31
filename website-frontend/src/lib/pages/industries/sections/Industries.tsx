import HorizontalCard from "@/lib/components/Common/HorizontalCard";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { IndustriesData } from "@/lib/data";
import Image from "next/image";

const Industries = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-20">
        {IndustriesData.map((industry, index) => {
          const isEven = index % 2 === 0;
          return (
            <div className="flex flex-col">
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`w-full h-[400px] overflow-hidden rounded-3xl relative ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={industry.imgSrc}
                    alt={industry.title}
                    fill
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Text Content */}
                <div
                  className={`w-full flex flex-col gap-4 ${isEven ? "md:order-1" : "md:order-2"}`}
                >
                 <TextWrapper
                    text={industry.title}
                    fontFamily="funnel"
                    styleType="title2"
                    className="text-gold"
                  />
                  <TextWrapper
                    text={industry.description}
                    fontFamily="dmSans"
                    styleType="body"
                  />
                </div>
              </div>
              <div className="h-0.5 bg-gray-100 w-full mt-20"></div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};
export default Industries;
