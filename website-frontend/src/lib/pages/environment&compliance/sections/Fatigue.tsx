import ImageAndText from "@/lib/components/Common/ImageAndText";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { TSectionItem } from "@/lib/types/content";

type FatigueProps = {
  data: TSectionItem;
};

const Fatigue = ({ data }: FatigueProps) => {
  return (
    <SectionContainer>
      <ImageAndText {...data} />
    </SectionContainer>
  );
};

export default Fatigue;
