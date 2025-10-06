import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import BorderedGrid from "../components/BorderedGrid";
import { WhyLogisticsGridData } from "@/lib/data";

const WhyLogistics = () => {
  return (
    <SectionContainer>
      <CenterTitle
        title="Why Integrated Logistics Matters"
        placement="left"
        titleColor="text-gold"
        className="!mt-0"
      />
      <BorderedGrid data={WhyLogisticsGridData} />
    </SectionContainer>
  );
};

export default WhyLogistics;
