'use client';

import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Recycling from "@/lib/pages/environment&compliance/sections/Recycling";
import GreenPractices from "@/lib/pages/environment&compliance/sections/GreenPractices";
import SafetyAndCompliance from "@/lib/pages/environment&compliance/sections/SafetyAndCompliance";
import Partners from "@/lib/pages/environment&compliance/sections/Partners";
import Fatigue from "@/lib/pages/environment&compliance/sections/Fatigue";
import { useSustainabilityPageData } from "@/lib/hooks/use-strapi-data";
import { StrapiLink } from "@/lib/services/media";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";


const Page = () => {
  const { data: sustainability_page_data, loading, error } = useSustainabilityPageData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!sustainability_page_data) return <ErrorMessage error={new Error('No data available')} />;

  return (
    <Container>
      <CommonHero
        title={sustainability_page_data.HeroSection.Title}
        subtitle={sustainability_page_data.HeroSection.Subtitle}
        description={sustainability_page_data.HeroSection.Description}
        imageSrc={StrapiLink(sustainability_page_data.HeroSection.Media.url)}
        cornerText={sustainability_page_data.HeroSection.cornerText}
      />
      <Recycling data={sustainability_page_data.RecyclingPrograms} />
      <GreenPractices data={sustainability_page_data.GreenPractices} />
      <SafetyAndCompliance data={sustainability_page_data.safetyandcompliance} />
      <Partners data={sustainability_page_data.Partners} />
      <Fatigue data={sustainability_page_data.Fatiguemanagement} />
      {/* <EnvironmentList /> */}
    </Container>
  );
};

export default Page;
