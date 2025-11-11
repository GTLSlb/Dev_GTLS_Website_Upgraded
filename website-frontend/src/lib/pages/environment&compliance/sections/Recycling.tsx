import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { RecyclingDataType } from "@/lib/types/content";
import Image from "next/image";

type RecyclingProps = {
  data: RecyclingDataType;
};

const Recycling = ({ data }: RecyclingProps) => {

  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <CenterTitle
            title={data.title}
            titleColor="text-gold"
            placement="left"
            description={data.description}
          />
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 min-h-96">
          <Image
            src={data.imgSrc}
            alt={data.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Recycling;
