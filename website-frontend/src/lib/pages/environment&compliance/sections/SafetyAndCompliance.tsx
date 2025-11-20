import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { PicAndMediaItem } from "@/lib/types/content";
import { SafetyComplianceData } from "@/lib/types/safetyCompliance";
import { Separator } from "@/lib/ui/separator";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SafetyComplianceProps = {
  data: PicAndMediaItem;
};

export default function SafetyAndCompliance({data}: SafetyComplianceProps) {
  return (
    <SectionContainer className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <TextWrapper
          text={data.Title}
          fontFamily="funnel"
          styleType="title1"
          className="text-gold"
        />
        <div className="flex flex-row gap-3">
          <Separator className="bg-gold" orientation="vertical" />
          <TextWrapper
            text={data.description}
            fontFamily="dmSans"
            styleType="bodySmall"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {data.Sections.map((section, index) => {
          // const IconComponent = LucideIcons[section.icon] as LucideIcon;
          return (
            <div key={index} className="flex flex-col gap-6">
              <div
                className="flex flex-col md:flex-row gap-x-12 gap-y-4"
              >
                <div className="items-center flex justify-center p-5 h-32 w-32 md:w-1/6 lg:w-1/12 xl:w-[10%] rounded-2xl bg-creamy">
                  {/* <IconComponent size={60} className="text-gold" /> */}
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
