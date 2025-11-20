import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import CustomerHubCard from "../components/CustomerHubCard";
import { CustomerHubDataType } from "@/lib/types/cards";

type CustomerHubProps = {
  data: CustomerHubDataType;
};

const CustomerHub = ({ data }: CustomerHubProps) => {
  return (
    <SectionContainer className="" parentClassName="bg-creamy">
      <div className="flex flex-col md:flex-col gap-6">
          <CenterTitle
            title={data.title}
            titleColor="text-gold"
            description={data.description}
            buttonText={data.buttonText}
            buttonVariant="default"
            className="!mt-0"
          />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.CustomerHubCard.map((card, index) => (
            <CustomerHubCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
export default CustomerHub;
