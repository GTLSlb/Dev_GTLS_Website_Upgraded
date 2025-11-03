import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BTriplesDataType } from "@/lib/types";

const BTriplesData:BTriplesDataType = {
  title: "Key Benefits of Our B-Triple Solution",
  sections: [
    {
      icon: "Truck",
      title: "Higher Load Capacity",
      description:
        "With an additional trailer, our B-Triples move significantly more freight per trip — ideal for customers managing large-volume shipments or high-frequency distribution needs.",
    },
    {
      icon: "Truck",
      title: "Safe Handling of Fragile Goods",
      description:
        "Each trailer is fitted with adjustable mezzanine floors, allowing the safe transport of delicate or fragile products that cannot be double stacked, ensuring your goods arrive in perfect condition.",
    },
    {
      icon: "Truck",
      title: "Enhanced Fuel Efficiency",
      description:
        "With an additional trailer, our B-Triples move significantly more freight per trip — ideal for customers managing large-volume shipments or high-frequency distribution needs.",
    },
    {
      icon: "Truck",
      title: "Extended Reach",
      description:
        "Our expanded B-Triple network now connects major eastern and southern routes, enabling faster and more consistent delivery over longer distances.",
    },
    {
      icon: "Truck",
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
      <Image
        src={"/svgs/tiger.svg"}
        alt="Tiger"
        width={700}
        height={700}
        className="absolute  left-0 -bottom-90"
      />
      <div className="xl:max-w-5xl 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col gap-10"></div>
        <CenterTitle
          title="Key Benefits of Our B-Triple Solution"
          titleColor="text-white"
          dark
        />
        <div className="grid md:grid-cols-2 gap-10">
          {BTriplesData.sections.map((item, i) => {
            const Icon = LucideIcons[item.icon] as LucideIcon;
            return (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Icon className="text-gold w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default KeyBenefits;
