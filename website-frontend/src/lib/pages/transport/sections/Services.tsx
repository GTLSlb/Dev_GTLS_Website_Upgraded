import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { transportServicesType } from "@/lib/types";
import { StrapiLink } from "@/lib/services/media";
import ImageAndText from "@/lib/components/Common/ImageAndText";

type transportServicesProps = {
  data: transportServicesType[];
};

const Services: React.FC<transportServicesProps> = ({ data }) => {
  return (
    <SectionContainer>
      <div className="space-y-15 divide-y divide-gray-200">
        {data.map((service, idx) => (
          <ImageAndText
            key={idx}
            title={service.title}
            description={service.description}
            imgSrc={service.image}
            imageFirst={idx % 2 !== 0}
            className={idx !== data.length - 1 ? "pb-15" : ""}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;
