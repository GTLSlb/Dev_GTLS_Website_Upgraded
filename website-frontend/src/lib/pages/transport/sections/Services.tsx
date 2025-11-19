import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { ServicesData } from "@/lib/data";
import Image from "next/image";

const Services = () => {
  return (
    <SectionContainer>
      <div className="space-y-20 divide-y divide-gray-200">
        {ServicesData.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row md:gap-24 md:pb-20 gap-5 items-center ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <CenterTitle
                title={service.title}
                titleColor="text-gold"
                subtitle={service.subtitle}
                description={service.description}
                listItems={service.listItems}
                buttonText={service.buttonText}
                buttonVariant="default"
                placement="left"
              />
            </div>
            <div className="relative flex-1 w-full h-[450px] rounded-4xl overflow-hidden">
              <Image
                src={service?.image? service.image : "/images/placeholder.png"}
                alt={service.title}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;
