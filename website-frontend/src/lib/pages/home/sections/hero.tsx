import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";

const Hero = () => {
  return (
    <SectionContainer className="flex flex-col gap-14 mt-10 !pt-28">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex md:flex-col gap-4">
          <TextWrapper
            text="Global Transport & Logistics Solutions"
            fontFamily="funnel"
            styleType="title2"
            className="text-dark-gold min-w-xs"
          />
          <TextWrapper
            text="Move More. Spend Less. Reduce Emissions."
            fontFamily="dmSans"
            styleType="title4Reg"
            className="hidden md:block max-w-md"
          />
        </div>
        <div className="w-10 h-0.5 hidden md:block bg-dark-gold mt-4"></div>
        <div className="md:w-5/12">
          <TextWrapper
            text="We provide end-to-end logistics solutions across Australia, with a focus on efficiency, safety, and sustainability. From local freight to long-haul BTriple operations, GTLS keeps your business moving."
            fontFamily="dmSans"
            styleType="body"
            className="max-w-2xl"
          />
        </div>
      </div>
      <div>
        <video autoPlay loop muted playsInline className="rounded-4xl">
          <source src="/videos/goldtiger-header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </SectionContainer>
  );
};
export default Hero;
