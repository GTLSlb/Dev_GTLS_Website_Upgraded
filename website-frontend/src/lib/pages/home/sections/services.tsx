import CenterTitle from "@/lib/components/Common/CenterTitle";
import GridCard from "@/lib/components/Common/GridCard";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { ServicesDataType } from "@/lib/types/props";
import { ServiceItem } from "@/lib/types/cards";
type ServicesProps = {
  data: ServicesDataType;
};

const Services = ({ data }: ServicesProps) => {
  return (
    <SectionContainer>
      <CenterTitle title={data.title} className="!mt-0" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.ServicesGrid.GridCard.map((service: ServiceItem) => (
          <GridCard key={service.id} {...service} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;
