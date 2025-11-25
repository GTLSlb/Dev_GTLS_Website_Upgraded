import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Industries from "@/lib/pages/industries/sections/Industries";
import { IndustryPageData } from "@/lib/types/pages";
import { getIndustryPageData } from "@/lib/services/api";



const Page = async () => {
  
  // Fetch data
  const industryData: IndustryPageData = await getIndustryPageData();
 

  const { HeroSection, Services} = industryData;
  return (
    <Container>
      <CommonHero
        title={HeroSection.Title}
        subtitle={HeroSection.Subtitle}
        description={HeroSection.Description}
        imageSrc={process.env.NEXT_PUBLIC_STRAPI_URL+HeroSection.Media?.url}
        cornerText={HeroSection.cornerText}
      />
      <Industries data={Services} />
    </Container>
  );
};

export default Page;
