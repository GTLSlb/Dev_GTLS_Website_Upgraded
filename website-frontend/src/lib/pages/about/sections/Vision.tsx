import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { VisionDataType } from "@/lib/types/content";

type VisionProps = {
  data: VisionDataType;
};
const Vision = ({ data }: VisionProps) => {
  return (
    <SectionContainer parentClassName="bg-gray-100">
      <CenterTitle
        title={data.title}
        titleColor="text-gold"
        className="!my-0"
        description={data.description}
      />
    </SectionContainer>
  );
};

export default Vision;
