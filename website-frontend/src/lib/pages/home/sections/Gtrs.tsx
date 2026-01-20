import CenterTitle from "@/lib/components/Common/CenterTitle";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { StrapiLink } from "@/lib/services/media";
import { GtrsItems } from "@/lib/types/cards";
import Image from "next/image";

type GtrsProps = {
  data: GtrsItems;
};
const Gtrs = ({ data }: GtrsProps) => {
  return (
    <SectionContainer parentClassName="bg-gray-50">
      <CenterTitle title={data.title} description={data.description} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {data.GtrsFeatures.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white text-center p-6 border border-gray-100 rounded-2xl gap-3 transition-all hover:bg-creamy duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="relative w-16 h-16 rounded-3xl group-hover:shadow-xl bg-creamy">
              <Image
                src={StrapiLink(item.icon.url)}
                alt={item.icon.alternativeText}
                fill
                className="object-cover p-4"
              />
            </div>
            <TextWrapper
              text={item.label}
              fontFamily="dmSans"
              styleType="title3"
              className="text-black group-hover:text-gold text-left"
            />
            <TextWrapper
              text={item.description}
              fontFamily="dmSans"
              styleType="bodySmall"
              className="text-gray-600 text-left"
            />
            <div className="flex items-center gap-2 transition-all duration-300 invisible group-hover:visible opacity-0 group-hover:opacity-100">
              <div className="w-8 h-1.5 rounded bg-[#e6c77a]" />
              <div className="w-8 h-1.5 rounded bg-[#d1a84f]" />
              <div className="w-8 h-1.5 rounded bg-[#b98c25]" />
              <div className="w-3 h-1.5 rounded bg-[#8f6b1b]" />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Gtrs;
