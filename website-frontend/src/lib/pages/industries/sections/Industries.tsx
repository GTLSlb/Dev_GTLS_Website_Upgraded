import HorizontalCard from "@/lib/components/Common/HorizontalCard";
import ImageAndText from "@/lib/components/Common/ImageAndText";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { IndustriesData } from "@/lib/data";
import Image from "next/image";

const Industries = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-20">
        {IndustriesData.map((industry, index) => (
        <div key={index}>
          <ImageAndText
            title={industry.title}
            description={industry.description}
            imgSrc={industry.imgSrc}
            imageFirst={index % 2 === 0} // ✅ alternate placement
          />
          {/* Divider outside */}
          <div className="h-0.5 bg-gray-100 w-full mt-20"></div>
        </div>
      ))}
      </div>
    </SectionContainer>
  );
};
export default Industries;
