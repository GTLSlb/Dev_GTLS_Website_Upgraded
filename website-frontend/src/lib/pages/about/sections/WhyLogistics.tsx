import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import BorderedGrid from "../components/BorderedGrid";
import { GridAboutDataType } from "@/lib/types/grids";

type WhyLogisticsProps = {
  data: GridAboutDataType
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
      <BorderedGrid data={data.gridData} />
    </SectionContainer>
  );
};

export default WhyLogistics;
