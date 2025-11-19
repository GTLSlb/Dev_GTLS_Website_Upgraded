import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { OurStoryData } from "@/lib/data";
import Image from "next/image";

const OurStory = () => {
  return (
    <SectionContainer className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-8/12">
        <CenterTitle title={OurStoryData.title} placement="left" description={OurStoryData.content} titleColor="text-gold"  className="!my-0"/>
      </div>
      <div className="relative w-full md:w-4/12 rounded-4xl rounded-bl-none overflow-hidden">
        <Image src={OurStoryData.imgSrc} alt="Our Story" fill className="object-cover" />
      </div>
    </SectionContainer>
  );
};
export default OurStory;
