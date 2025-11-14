import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import BorderedGrid from "../components/BorderedGrid";
import { GridAboutDataType } from "@/lib/types/grids";
import { WhyGtlsDataType, WhyLogisticsDataType } from "@/lib/types/content";

type WhyLogisticsProps = {
  data: WhyLogisticsDataType
};

const WhyLogistics = ({ data }: WhyLogisticsProps) => {
  return (
    <SectionContainer>
      <CenterTitle
        title={data.title}
        placement="left"
        titleColor="text-gold"
        className="!mt-0"
      />
      <BorderedGrid data={data.GridCard} />
    </SectionContainer>
  );
};

export default WhyLogistics;
