import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BTriplesDataType } from "@/lib/types";
import TextWrapper from "@/lib/components/Common/TextWrapper";

const BTriplesData: BTriplesDataType = {
  title: "Key Benefits of Our B-Triple Solution",
  sections: [
    {
      icon: "Truck",
      title: "Higher Load Capacity",
      description:
        "With an additional trailer, our B-Triples move significantly more freight per trip — ideal for customers managing large-volume shipments or high-frequency distribution needs.",
    },
    {
      icon: "Save",
      title: "Safe Handling of Fragile Goods",
      description:
        "Each trailer is fitted with adjustable mezzanine floors, allowing the safe transport of delicate or fragile products that cannot be double stacked, ensuring your goods arrive in perfect condition.",
    },
    {
      icon: "Fuel",
      title: "Enhanced Fuel Efficiency",
      description:
        "With an additional trailer, our B-Triples move significantly more freight per trip — ideal for customers managing large-volume shipments or high-frequency distribution needs.",
    },
    {
      icon: "Map",
      title: "Extended Reach",
      description:
        "Our expanded B-Triple network now connects major eastern and southern routes, enabling faster and more consistent delivery over longer distances.",
    },
    {
      icon: "HardHat",
      title: "Reliability and Safety",
      description:
        "Safety remains at the forefront of every journey. Our B-Triple trucks are equipped with advanced monitoring systems, and our drivers undergo specialized training to ensure precision, control, and care on every route.",
    },
  ],
};

const KeyBenefits = () => {
  return (
    <SectionContainer
      className=""
      parentClassName="bg-gold relative overflow-hidden"
    >
      <div className="xl:max-w-5xl 2xl:max-w-7xl mx-auto">
        <Image
          src="/svgs/reverseTiger.svg"
          alt="Director"
          width={900}
          height={300}
          className="object-cover absolute opacity-50 -bottom-60 -right-50"
        />
        <div className="flex flex-col gap-6">
          <CenterTitle
            title="Key Benefits of Our B-Triple Solution"
            titleColor="text-white"
            placement="left"
            dark
          />
          <div className="grid md:grid-cols-2 divide-y">
            {BTriplesData.sections.map((item, i) => {
              const Icon = LucideIcons[item.icon] as LucideIcon;
              return (
                <div key={i} className="flex gap-12 py-10 items-start">
                  <div className="bg-white p-8 rounded-xl">
                    <Icon className="text-gold" size={64} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <TextWrapper
                      text={item.title}
                      fontFamily="dmSans"
                      styleType="subtitle"
                      className="text-white"
                    />
                    <TextWrapper
                      text={item.description}
                      fontFamily="dmSans"
                      styleType="bodySmall"
                      className="text-white/80 !leading-snug"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default KeyBenefits;
