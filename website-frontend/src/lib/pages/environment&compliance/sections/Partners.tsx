import ImageAndText from "@/lib/components/Common/ImageAndText";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { PicAndMediaItem, TSectionItem } from "@/lib/types/content";

type PartnersProps = {
  data: PicAndMediaItem;
};

const Partners = ({ data }: PartnersProps) => {
  return (
    <SectionContainer>
      <ImageAndText title={data.Title} description={data.description} imgSrc={data.image.url} imageFirst={false} />
    </SectionContainer>
  );
};

export default Partners;
