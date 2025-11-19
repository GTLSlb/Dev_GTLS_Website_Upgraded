import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { SafetyComplianceData } from "@/lib/types";
import { Separator } from "@/lib/ui/separator";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

const safetyComplianceData: SafetyComplianceData = {
  title: "Safety & Compliance",
  intro: {
    description:
      "Our professional drivers are fully licensed, highly skilled, and trained in fatigue management, mass management, and the safe handling of dangerous goods. With these initiatives, Gold Tiger Logistics Solutions continues to set new benchmarks in safety, compliance, and efficiency within the logistics industry.",
  },
  sections: [
    {
      icon: "Truck",
      title: "Ensuring Safe Roads for Everyone",
      content: [
        "Gold Tiger Logistics Solutions remains deeply committed to the safety of all road users. As part of our ongoing safety innovation program, we have enhanced our practices through the integration of two state-of-the-art weighbridge systems — one recently installed at our Sydney depot and another at our Melbourne depot.",
        "With these advanced systems in place, our interstate linehaul movements undergo comprehensive checks before departure. This proactive approach prevents overloaded vehicles from taking to the road, safeguards our drivers and infrastructure, and ensures full compliance with legal weight regulations.",
      ],
    },
    {
      icon: "Cog",
      title: "Advanced Automation",
      content: [
        "Our automated weighbridge technology eliminates human error, strengthens accuracy in weight verification, and streamlines operational workflows. It also supports internal documentation and optimizes vehicle management, significantly improving efficiency, reducing downtime, and maintaining DIFOT (Delivered In Full, On Time) performance.",
        "These innovations provide our drivers with greater confidence, ensuring every vehicle meets the highest safety standards and operates at optimal performance.",
      ],
    },
    {
      icon: "TrafficCone",
      title: "Next-Level Fleet Compliance",
      content: [
        "Further advancing our commitment to compliance, our Volvo fleet is progressively being upgraded to meet Euro 6 environmental standards.",
        "We have also installed a MAHA braking testing system at our workshop, enabling precise assessment of brake performance.",
      ],
    },
    {
      icon: "ShieldCheck",
      title: "Zero-Injury Record & Responsible Driving",
      content: [
        "Gold Tiger takes pride in maintaining an outstanding health and safety record — zero injuries and accident-free driving across our fleet.",
        "We enforce a zero-tolerance policy toward drugs and alcohol, supported by regular drug and alcohol testing to ensure all team members operate responsibly and safely.",
      ],
    },
  ],
};

export default function SafetyAndCompliance() {
  return (
    <SectionContainer className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <TextWrapper
          text={safetyComplianceData.title}
          fontFamily="funnel"
          styleType="title1"
          className="text-gold"
        />
        <div className="flex flex-row gap-3">
          <Separator className="bg-gold" orientation="vertical" />
          <TextWrapper
            text={safetyComplianceData.intro.description}
            fontFamily="dmSans"
            styleType="bodySmall"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {safetyComplianceData.sections.map((section, index) => {
          const IconComponent = LucideIcons[section.icon] as LucideIcon;
          return (
            <div key={index} className="flex flex-col gap-6">
              <div
                className="flex flex-col md:flex-row gap-x-12 gap-y-4"
              >
                <div className="items-center flex justify-center p-5 h-32 w-32 md:w-1/6 lg:w-1/12 xl:w-[10%] rounded-2xl bg-creamy">
                  <IconComponent size={60} className="text-gold" />
                </div>

                <div className="flex flex-col w-full md:w-5/6 lg:w-11/12 xl:w-[90%] gap-2">
                  <TextWrapper
                    text={section.title}
                    fontFamily="dmSans"
                    styleType="title4"
                  />
                  {section.content.map((paragraph, i) => (
                    <TextWrapper
                      text={paragraph}
                      fontFamily="dmSans"
                      styleType="bodySmall"
                      className="!leading-4"
                      key={i}
                    />
                  ))}
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
