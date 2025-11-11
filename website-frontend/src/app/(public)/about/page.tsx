import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import BannerSection from "@/lib/pages/about/sections/BannerSection";
import OurStory from "@/lib/pages/about/sections/OurStory";
import Mission from "@/lib/pages/about/sections/Mission";
import WhyLogistics from "@/lib/pages/about/sections/WhyLogistics";
import CoreValues from "@/lib/pages/about/sections/CoreValues";
import Vision from "@/lib/pages/about/sections/Vision";
import MessageBanner from "@/lib/pages/about/sections/MessageBanner";
import { BannerAboutData, CoreValuesData, MessageBannerdata, MissionData, OurTeamData, VisionData, WhyLogisticsData } from "@/lib/data";
import OurTeam from "@/lib/pages/about/sections/OurTeam";
import { CommonHeroDataType } from "@/lib/types/hero";
import { AboutUsPageData } from "@/lib/types/pages";
import { getAboutUsPageData } from "@/lib/services/api";

type HeroProps = {
  /** Pass the hero data object to the component */
  data: CommonHeroDataType;
};

const Page = async () => {
  
  // Fetch data
  const aboutUsData: AboutUsPageData | null = await getAboutUsPageData();
  console.log(aboutUsData)
  // Handle Not Found/Error
  if (!aboutUsData) {
    return (
      <div className="text-center p-10">
        <h1>Error</h1>
        <p>Failed to load About Us page content.</p>
      </div>
    );
  }
  
  // Destructure the necessary components
  const { HeroSection, OurVision , OurStory: OurStoryData, CoreValues: CoreValuesData } = aboutUsData;
  return (
    <Container>
      <CommonHero
        title={HeroSection.Title}
        subtitle={HeroSection.Subtitle}
        description={HeroSection.Description}
        imageSrc={HeroSection.Media?.url || "/pages/about-hero.png"}
        link={HeroSection.link}
        cornerText={HeroSection.cornerText}
      />
      {/* <History /> */}
      <OurStory data={OurStoryData} />
      <Mission data={MissionData} />
      <Vision data={OurVision} />
      <CoreValues data={CoreValuesData} />
      <BannerSection data={BannerAboutData} />
      <WhyLogistics data={WhyLogisticsData} />
      <MessageBanner data={MessageBannerdata} />
      <OurTeam data={OurTeamData} />
    </Container>
  );
};

export default Page;
