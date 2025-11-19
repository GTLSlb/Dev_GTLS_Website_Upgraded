import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { InfoSection } from "@/lib/types";

const SmarterLogistics = ({ title, items, description }: InfoSection) => {
  return (
    <SectionContainer className="" parentClassName="bg-gold">
      <CenterTitle
        title={title}
        description={description}
        dark
        titleColor="text-white"
      />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        {items?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 rounded-4xl p-10 bg-white"
          >
            {item.icon}
            <CenterTitle
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              listItems={item.listItems}
              titleColor="text-gold"
              className="!mt-0"
              placement="left"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
export default SmarterLogistics;
