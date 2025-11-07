import CenterTitle from "@/lib/components/Common/CenterTitle";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import BorderedGrid from "../components/BorderedGrid";
import { GridAboutDataType } from "@/lib/types/grids";

type MissionProps = {
  data: GridAboutDataType;
};

const Mission = ({ data }: MissionProps) => {
  return (
    <SectionContainer className="flex flex-col gap-6">
      <CenterTitle
        title={data.title}         // <-- Use data from object
        placement="left"
        titleColor="text-gold"
        description={data.description} // <-- Use data from object
        className="!my-0"
      />

      {/* * This is how you render optional content:
        * If MissionData.coreCommitmentsText exists, this component will render.
        * If you remove it from the data file, it will render nothing.
      */}
      {data.subtitle && (
        <TextWrapper
          text={data.subtitle}
          fontFamily="dmSans"
          styleType="link"
        />
      )}

      <BorderedGrid data={data.gridData} /> {/* <-- Use data from object */}
    </SectionContainer>
  );
};

export default Mission;
