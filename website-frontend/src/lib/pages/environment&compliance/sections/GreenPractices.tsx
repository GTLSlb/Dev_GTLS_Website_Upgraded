import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import Image from "next/image";

const GreenPractices = () => {
  // Define your dynamic content object
  const sectionData = {
    title: "Green Practices",
    titleColor: "text-green",
    image: {
      src: "/svgs/greenpractices.svg",
      alt: "recycling",
    },
    description:
      "At Gold Tiger Logistics Solutions, we believe that progress and environmental responsibility go hand in hand. Our commitment to going green is embedded in every part of our logistics operations — from transport and warehousing to packaging and technology. We continuously invest in cleaner and more efficient transport solutions. Our B-Triple Solution allows us to transport more goods per trip, which is ideal for customers with large-volume shipments or high-frequency needs, significantly reducing emissions, cutting the number of trips needed, and lowering our carbon footprint. Through optimized route planning and real-time tracking, we further minimize fuel waste and environmental impact. Our warehouses are designed with energy efficiency in mind using solar energy, LED lighting, and waste reduction systems. We encourage the use of recyclable and reusable packaging materials, cutting down on single-use plastics and unnecessary waste. We also promote paperless operations through digital documentation and smart logistics platforms, helping preserve natural resources.",
  };

  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 min-h-96">
          <Image
            src={sectionData.image.src}
            alt={sectionData.image.alt}
            fill
            className="object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <CenterTitle
            title={sectionData.title}
            titleColor={sectionData.titleColor}
            placement="left"
            description={sectionData.description}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default GreenPractices;
