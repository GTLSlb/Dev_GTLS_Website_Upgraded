import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import CustomerHubCard from "../components/CustomerHubCard";
import { CustomerHubData } from "@/lib/data";

const CustomerHub = () => {
  return (
    <SectionContainer className="" parentClassName="bg-creamy">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-5/12">
          <CenterTitle
            title="Customer Hub Simplifying Your Journey"
            placement="left"
            titleColor="text-gold"
            description="Your one-stop destination for support, resources, and self-service tools."
            buttonText={"Get a Custom Solution"}
            buttonVariant={"default"}
            className="!mt-0"
          />
        </div>
        <div className="flex flex-col md:w-7/12 gap-6">
        {CustomerHubData.map((card, index) => (
            <CustomerHubCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
export default CustomerHub;
