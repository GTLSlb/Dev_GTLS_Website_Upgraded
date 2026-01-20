import ImageAndText from "@/lib/components/Common/ImageAndText";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { PicAndMediaItem } from "@/lib/types/content";

type FatigueProps = {
  data: PicAndMediaItem;
};

const Fatigue = ({ data }: FatigueProps) => {
  return (
    <SectionContainer>
      <ImageAndText title={data.title} description={data.description} imgSrc={data.ImgSrc}/>
    </SectionContainer>
  );
};

export default Fatigue;
