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
import { StrapiLink } from "@/lib/services/media";



console.log('Sustainability Page Data:', sustainability_page_data);

const Page = () => {
  return (
    <Container>
      <CommonHero
        title={sustainability_page_data.HeroSection.Title}
        subtitle={sustainability_page_data.HeroSection.Subtitle}
        description={sustainability_page_data.HeroSection.Description}
        imageSrc={StrapiLink(sustainability_page_data.HeroSection.Media.url)}
        cornerText={sustainability_page_data.HeroSection.cornerText}
      />
      <Recycling data={sustainability_page_data.PicAndMedia[0]} />
      <GreenPractices data={sustainability_page_data.PicAndMedia[1]} />
      <SafetyAndCompliance data={sustainability_page_data.PicAndMedia[4]} />
      <Partners data={sustainability_page_data.PicAndMedia[2]} />
      <Fatigue data={sustainability_page_data.PicAndMedia[3]} />
      {/* <EnvironmentList /> */}
    </Container>
  );
};

export default Page;
