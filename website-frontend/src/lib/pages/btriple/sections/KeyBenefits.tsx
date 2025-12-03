import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import Image from "next/image";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import { BTriplesDataType } from "@/lib/types/safetyCompliance";
import { StrapiLink } from "@/lib/services/media";

type BTripleProps = {
  data: BTriplesDataType;
};

const KeyBenefits = ({ data }: BTripleProps) => {
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
            title={data.title}
            titleColor="text-white"
            className="!my-0"
            placement="left"
            dark
          />
          <div className="grid md:grid-cols-2 divide-y">
            {data.CoreValueItem?.map((item, i) => {
              return (
                <div key={i} className="flex gap-8 py-10 px-4 items-start">
                  <div className="bg-white relative p-4 md:p-8 rounded-xl">
                    <Image
                      src={StrapiLink(item.icon.url)}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
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
