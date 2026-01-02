"use client";
import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import BannerSection from "@/lib/pages/about/sections/BannerSection";
import OurStory from "@/lib/pages/about/sections/OurStory";
import Mission from "@/lib/pages/about/sections/Mission";
import WhyLogistics from "@/lib/pages/about/sections/WhyLogistics";
import CoreValues from "@/lib/pages/about/sections/CoreValues";
import Vision from "@/lib/pages/about/sections/Vision";
import MessageBanner from "@/lib/pages/about/sections/MessageBanner";
import OurTeam from "@/lib/pages/about/sections/OurTeam";
import { useAboutUsPageData } from "@/lib/hooks/use-strapi-data";
import { StrapiLink } from "@/lib/services/media";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";


const Page = () => {
  const { data: aboutUsData, loading, error } = useAboutUsPageData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!aboutUsData) return <ErrorMessage error={new Error('No data available')} />;
  
  // Destructure the necessary components
  const { HeroSection, OurVision , OurStory: OurStoryData, CoreValues: CoreValuesData, Mission: MissionData, IntegratedModel: BannerAboutData, WhyLogistics: WhyLogisticsData,MessageDirector,MeetTeam: OurTeamData  } = aboutUsData;
  
  return (
    <Container>
      <CommonHero
        title={HeroSection.Title}
        subtitle={HeroSection.Subtitle}
        description={HeroSection.Description}
        imageSrc={StrapiLink(HeroSection.Media.url) || "/pages/about-hero.png"}
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
      <MessageBanner data={MessageDirector} />
      <OurTeam data={OurTeamData} />
    </Container>
  );
};

export default Page;
