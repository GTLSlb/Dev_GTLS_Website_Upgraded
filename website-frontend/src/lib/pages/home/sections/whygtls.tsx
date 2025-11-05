import CenterTitle from "@/lib/components/Common/CenterTitle";
import UnevenGrid from "@/lib/components/Common/UnevenGrid";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { WhyGtlsData } from "@/lib/data";
import Image from "next/image";

const WhyGtls = () => {
  return (
    <SectionContainer className="" parentClassName="bg-gold relative overflow-hidden">
        <Image
        src={"/svgs/tiger.svg"}
        alt="Tiger"
        width={700}
        height={700}
        className="absolute  left-0 -bottom-90"
        />
      <div className="xl:max-w-5xl 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col gap-10"></div>
        <CenterTitle
          title="Why Gold Tiger Logistics Solutions"
          titleColor="text-white"
          description="Designed for Efficiency and Security"
          buttonText={"Get a Custom Solution"}
          dark
        />
        <UnevenGrid items={WhyGtlsData} />
      </div>
    </SectionContainer>
  );
};
export default WhyGtls;
