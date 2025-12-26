import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Recycling from "@/lib/pages/environment&compliance/sections/Recycling";
import GreenPractices from "@/lib/pages/environment&compliance/sections/GreenPractices";
import SafetyAndCompliance from "@/lib/pages/environment&compliance/sections/SafetyAndCompliance";
import Partners from "@/lib/pages/environment&compliance/sections/Partners";
import Fatigue from "@/lib/pages/environment&compliance/sections/Fatigue";
import { getSustainabilityPageData } from "@/lib/services/api";
import { StrapiLink } from "@/lib/services/media";

const Page = async () => {
  const sustainability_page_data = await getSustainabilityPageData();

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
