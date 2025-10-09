import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { ServiceData } from "@/lib/types";

const Locations = ({
  title,
  subtitle,
  description,
  listItems,
  buttonText,
}: ServiceData) => {
  return (
    <SectionContainer className="" parentClassName="bg-gray-100">
      <div className="flex flex-col gap-10">
        <CenterTitle
          title={title}
          subtitle={subtitle}
          listItems={listItems}
          titleColor="text-gold"
          placement="left"
          description={description}
          buttonText={buttonText}
        />
      </div>
    </SectionContainer>
  );
};
export default Locations;
