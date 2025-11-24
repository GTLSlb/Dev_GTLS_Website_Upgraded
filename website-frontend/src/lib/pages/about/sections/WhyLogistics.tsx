import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import BorderedGrid from "../components/BorderedGrid";
import { GridAboutDataType, WhyAboutDataType } from "@/lib/types/grids";
import { WhyGtlsDataType, WhyLogisticsDataType } from "@/lib/types/content";

type WhyLogisticsProps = {
  data: WhyAboutDataType;
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
      <BorderedGrid data={data.WhyLogisticsItem} />
    </SectionContainer>
  );
};

export default WhyLogistics;
