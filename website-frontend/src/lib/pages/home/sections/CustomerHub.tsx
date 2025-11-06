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
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-5/12">
          <CenterTitle
            title={data.title}
            placement={"left"}
            titleColor="text-gold"
            description={data.description}
            buttonText={data.buttonText}
            buttonVariant="default"
            className="!mt-0"
          />
        </div>
        <div className="flex flex-col md:w-7/12 gap-6">
        {data.list.map((card, index) => (
            <CustomerHubCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
export default CustomerHub;
