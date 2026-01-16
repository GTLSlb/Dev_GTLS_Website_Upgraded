import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { transportServicesType } from "@/lib/types";
import { StrapiLink } from "@/lib/services/media";
import ImageAndText from "@/lib/components/Common/ImageAndText";

type solutionsProps = {
  data: transportServicesType;
};

const Services: React.FC<solutionsProps> = ({ data }) => {
  return (
    <SectionContainer parentClassName="bg-gray-100">
      <div className="space-y-20 divide-y divide-gray-200">
          <ImageAndText
            title={data.title}
            description={data.description}
            imgSrc={data.image.url}
            imageFirst={false}
          />
      </div>
    </SectionContainer>
  );
};

export default Services;
