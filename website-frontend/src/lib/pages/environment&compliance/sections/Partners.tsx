import ImageAndText from "@/lib/components/Common/ImageAndText";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { PicAndMediaItem } from "@/lib/types/content";

type PartnersProps = {
  data: PicAndMediaItem;
};

const Partners = ({ data }: PartnersProps) => {
  return (
    <SectionContainer>
      <ImageAndText title={data.title} description={data.description} imgSrc={data.ImgSrc.url} imageFirst={false} imageClassName="!object-contain" />
    </SectionContainer>
  );
};

export default Partners;
