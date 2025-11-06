import CenterTitle from "@/lib/components/Common/CenterTitle";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import BorderedGrid from "../components/BorderedGrid";
import { MissionGridData } from "@/lib/data";

const Mission = () => {
  return (
    <SectionContainer className="flex flex-col gap-6">
      <CenterTitle
        title="Mission"
        placement="left"
        titleColor="text-gold"
        description="To provide safe, efficient, and innovative logistics solutions that empower businesses to grow with confidence."
        className="!my-0"
      />
      <TextWrapper text="Core Commitments:" fontFamily="dmSans" styleType="link" />
      <BorderedGrid data={MissionGridData} />
    </SectionContainer>
  );
};

export default Mission;
