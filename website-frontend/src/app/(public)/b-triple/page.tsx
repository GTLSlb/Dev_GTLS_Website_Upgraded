"use client";
import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import KeyBenefits from "@/lib/pages/btriple/sections/KeyBenefits";
import { useBTriplePageData } from "@/lib/hooks/use-strapi-data";
import { StrapiLink } from "@/lib/services/media";
import Expansion from "@/lib/pages/btriple/sections/Expansion";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";


const Page = () => {
  const { data: bTripleData, loading, error } = useBTriplePageData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!bTripleData) return <ErrorMessage error={new Error('No data available')} />;
  // 2. Destructure the fetched Strapi components (assuming they match your type)
  const { HeroSection, KeyBenefits: FetchedKeyBenefits , Expansion: ExpansionValues} = bTripleData;

  return (
    <Container>
      <CommonHero
        title={HeroSection.Title}
        description={HeroSection.Description}
        imageSrc={HeroSection.Image} 
        contain
        cornerText={HeroSection.cornerText}
      />
      <KeyBenefits data={FetchedKeyBenefits} />
      <Expansion data={ExpansionValues} /> 
      
    </Container>
  );
};

export default Page;