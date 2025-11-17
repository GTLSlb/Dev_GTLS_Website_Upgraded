'use client';

import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Recycling from "@/lib/pages/environment&compliance/sections/Recycling";
import GreenPractices from "@/lib/pages/environment&compliance/sections/GreenPractices";
import SafetyAndCompliance from "@/lib/pages/environment&compliance/sections/SafetyAndCompliance";
import Partners from "@/lib/pages/environment&compliance/sections/Partners";
import Fatigue from "@/lib/pages/environment&compliance/sections/Fatigue";
import { CommonHeroDataType } from "@/lib/types/hero";
import {
  GreenPracticesDataType,
  RecyclingDataType,
  TSectionItem,
} from "@/lib/types/content";
import { SafetyComplianceData } from "@/lib/types/safetyCompliance";
import { sustainability_page_data } from "@/lib/data";

const sectionData: RecyclingDataType = {
  title: "Recycling Programs",
  imgSrc: "/svgs/recycling.svg",
  description:
    "At Gold Tiger Logistics Solutions, sustainability goes beyond transportation — it’s part of how we operate every day. Through our dedicated recycling programs, we responsibly recycle materials such as metal, batteries, and tyres. These initiatives help reduce waste, conserve natural resources, and support a circular economy.\n\n By transforming discarded materials into reusable resources, we actively contribute to a cleaner, safer, and more sustainable environment for future generations.",
};

const greenPracticesData: GreenPracticesDataType = {
  title: "Green Practices",
  imgSrc: "/svgs/greenpractices.svg",
  description:
    "At Gold Tiger Logistics Solutions, we believe that progress and environmental responsibility go hand in hand. Our commitment to going green is embedded in every part of our logistics operations — from transport and warehousing to packaging and technology. We continuously invest in cleaner and more efficient transport solutions. Our B-Triple Solution allows us to transport more goods per trip, which is ideal for customers with large-volume shipments or high-frequency needs, significantly reducing emissions, cutting the number of trips needed, and lowering our carbon footprint. Through optimized route planning and real-time tracking, we further minimize fuel waste and environmental impact. Our warehouses are designed with energy efficiency in mind using solar energy, LED lighting, and waste reduction systems. We encourage the use of recyclable and reusable packaging materials, cutting down on single-use plastics and unnecessary waste. We also promote paperless operations through digital documentation and smart logistics platforms, helping preserve natural resources.",
};

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

const PartnersData: TSectionItem = {
  imgSrc: "/globe.svg",
  title: "Partners & Certifications",
  description:
    "At Gold Tiger Logistics Solutions, we take pride in partnering with industry leaders and maintaining globally recognized standards. As a Golden Volvo Partner, we align with Volvo’s excellence in safety, performance, and sustainability, ensuring our fleet operates with the highest reliability and environmental efficiency.\n\n We are also SQF (Safe Quality Food) and HACCP certified, reflecting our unwavering commitment to food safety and quality management. These certifications guarantee that our storage and handling practices meet strict international standards, ensuring the safe transport of goods across every stage of our logistics operations.\n\n Gold Tiger’s partnerships and certifications demonstrate our dedication to excellence, compliance, and continuous improvement delivering trusted and reliable logistics solutions every time.",
};

const FatigueData: TSectionItem = {
  imgSrc: "/pages/fatigue.png",
  title: "Fatigue management",
  description:
    "At Gold Tiger Logistics Solutions, driver safety and well-being are top priorities. We are NHVR (National Heavy Vehicle Regulator) certified, ensuring our fatigue management practices meet the highest regulatory standards.\n\n Our robust fatigue management program includes scheduled rest breaks, route planning to minimize driver strain, and ongoing training to help drivers recognize and manage fatigue. By combining regulatory compliance with proactive safety measures, we ensure our drivers stay alert, safe, and fully capable of delivering goods efficiently and responsibly.\n\n At Gold Tiger Logistics Solutions, every soul matters. We ensure that each driver operates in a safe, supportive environment; by prioritizing our drivers’ health and safety, we protect not only our team but every road user, reflecting our belief that safety and care are at the heart of everything we do.",
};

const Page = () => {
  return (
    <Container>
      <CommonHero
        title={sustainability_page_data.HeroSection.Title}
        subtitle={sustainability_page_data.HeroSection.Subtitle}
        description={sustainability_page_data.HeroSection.Description}
        imageSrc={process.env.NEXT_PUBLIC_STRAPI_URL+sustainability_page_data.HeroSection.Media.url}
        cornerText={sustainability_page_data.HeroSection.cornerText}
      />
      <Recycling data={sectionData} />
      <GreenPractices data={greenPracticesData} />
      <SafetyAndCompliance data={safetyComplianceData} />
      <Partners data={PartnersData} />
      <Fatigue data={FatigueData} />
      {/* <EnvironmentList /> */}
    </Container>
  );
};

export default Page;
