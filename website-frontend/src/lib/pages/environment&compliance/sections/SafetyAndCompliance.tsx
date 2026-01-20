import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { StrapiLink } from "@/lib/services/media";
import { safetyandcomplianceType } from "@/lib/types/content";
import { Separator } from "@/lib/ui/separator";
import Image from "next/image";

type SafetyComplianceProps = {
  data: safetyandcomplianceType;
};

export default function SafetyAndCompliance({ data }: SafetyComplianceProps) {
  return (
    <SectionContainer className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <TextWrapper
          text={data.title}
          fontFamily="funnel"
          styleType="title1"
          className="text-gold"
        />
        <div className="flex flex-row gap-3 mt-2">
          <Separator className="bg-gold hidden md:block" orientation="vertical" />
          <TextWrapper
            text={data.description}
            fontFamily="dmSans"
            styleType="bodySmall"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {data.safetyandcomplianceItems.map((section, index) => {
          return (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-x-12 gap-y-4">
                <div className="items-center flex justify-center p-5 h-32 w-32 md:w-1/6 lg:w-1/12 xl:w-[10%] rounded-2xl bg-creamy">
                  <Image
                    src={StrapiLink(section.ImgSrc.url)}
                    placeholder="blur"
                    blurDataURL="/Logos/logo-transparent.svg"
                    alt={section.ImgSrc.alternativeText}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col w-full md:w-5/6 lg:w-11/12 xl:w-[90%] gap-2">
                  <TextWrapper
                    text={section.title}
                    fontFamily="dmSans"
                    styleType="title4"
                  />
                  {/* {section.content.map((paragraph, i) => ( */}
                  <TextWrapper
                    text={section.description}
                    fontFamily="dmSans"
                    styleType="bodySmall"
                    className="!leading-4"
                  />
                  {/* // ))} */}
                </div>
              </div>
              <Separator className="bg-gray-300" />
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
