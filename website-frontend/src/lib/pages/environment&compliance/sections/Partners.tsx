import ImageAndText from "@/lib/components/Common/ImageAndText";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { TSectionItem } from "@/lib/types/content";

type PartnersProps = {
  data: TSectionItem;
};

const Partners = ({ data }: PartnersProps) => {
  return (
    <SectionContainer>
      <ImageAndText {...data} imageFirst={false} />
    </SectionContainer>
  );
};

export default Partners;
