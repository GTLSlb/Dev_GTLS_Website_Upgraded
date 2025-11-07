import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { OurStoryData } from "@/lib/data";
import { OurStoryDataType } from "@/lib/types/content";
import Image from "next/image";

type OurStoryProps = {
  data: OurStoryDataType;
};

const OurStory = ({ data }: OurStoryProps) => {
  return (
    <SectionContainer className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-8/12">
        <CenterTitle title={data.title} placement="left" description={data.content} titleColor="text-gold"  className="!my-0"/>
      </div>
      <div className="relative w-full md:w-4/12 rounded-4xl rounded-bl-none overflow-hidden">
        <Image src={data.imgSrc} alt="Our Story" fill className="object-cover" />
      </div>
    </SectionContainer>
  );
};
export default OurStory;
