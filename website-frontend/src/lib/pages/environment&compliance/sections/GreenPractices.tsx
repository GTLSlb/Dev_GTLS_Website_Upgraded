import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { GreenPracticesDataType } from "@/lib/types/content";
import Image from "next/image";

type GreenPracticesProps = {
  data: GreenPracticesDataType;
};

const GreenPractices = ({data}: GreenPracticesProps) => {

  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 min-h-96">
          <Image
            src={data.imgSrc}
            alt={data.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <CenterTitle
            title={data.title}
            titleColor="text-green"
            placement="left"
            description={data.description}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default GreenPractices;
