import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import Image from "next/image";

const Recycling = () => {
  // Define dynamic data
  const sectionData = {
    title: "Recycling Programs",
    titleColor: "text-gold",
    image: {
      src: "/svgs/recycling.svg",
      alt: "recycling",
    },
    description:
      "At Gold Tiger Logistics Solutions, sustainability goes beyond transportation — it’s part of how we operate every day. Through our dedicated recycling programs, we responsibly recycle materials such as metal, batteries, and tyres. These initiatives help reduce waste, conserve natural resources, and support a circular economy. By transforming discarded materials into reusable resources, we actively contribute to a cleaner, safer, and more sustainable environment for future generations.",
  };

  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <CenterTitle
            title={sectionData.title}
            titleColor={sectionData.titleColor}
            placement="left"
            description={sectionData.description}
          />
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 min-h-96">
          <Image
            src={sectionData.image.src}
            alt={sectionData.image.alt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Recycling;
