import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { HeroDataType } from "@/lib/types/hero";
type HeroProps = {
  data: HeroDataType;
};
const Hero = ({ data }: HeroProps) => {
  return (
    <SectionContainer className="flex flex-col gap-14 mt-10 !pt-28">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex md:flex-col gap-4">
          <TextWrapper
            text={data.Title}
            fontFamily="funnel"
            styleType="title2"
            className="text-dark-gold min-w-xs"
          />
          <TextWrapper
            text={data.Subtitle}
            fontFamily="dmSans"
            styleType="title4Reg"
            className="hidden md:block max-w-md"
          />
        </div>
        <div className="w-10 h-0.5 hidden md:block bg-dark-gold mt-4" />
        <div className="md:w-5/12">
          <TextWrapper
            text={data.Description}
            fontFamily="dmSans"
            styleType="body"
            className="max-w-2xl"
          />
        </div>
      </div>

      <div>
        <video autoPlay loop muted playsInline className="rounded-4xl">
          <source src={process.env.NEXT_PUBLIC_STRAPI_URL ? process.env.NEXT_PUBLIC_STRAPI_URL + data?.Media?.url : ''} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </SectionContainer>
  );
};

export default Hero;
