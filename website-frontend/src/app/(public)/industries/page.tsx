"use client";
import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Industries from "@/lib/pages/industries/sections/Industries";
import { useIndustryPageData } from "@/lib/hooks/use-strapi-data";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";



const Page = () => {
  const { data: industryData, loading, error } = useIndustryPageData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!industryData) return <ErrorMessage error={new Error('No data available')} />;
 

  const { HeroSection, Services} = industryData;
  return (
    <Container>
      <CommonHero
        title={HeroSection.Title}
        subtitle={HeroSection.Subtitle}
        description={HeroSection.Description}
        imageSrc={HeroSection.Media}
        cornerText={HeroSection.cornerText}
      />
      <Industries data={Services} />
    </Container>
  );
};

export default Page;
