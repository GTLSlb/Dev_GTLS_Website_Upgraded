import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import KeyBenefits from "@/lib/pages/btriple/sections/KeyBenefits";
import Expansion from "@/lib/pages/btriple/sections/Expansion";
import { CommonHeroDataType } from "@/lib/types/hero";
import { BTriplesData, ExpansionValues } from "@/lib/data";
import { getBTriplePageData } from "@/lib/services/api";
import { BTripPageData } from "@/lib/types/pages";


const Page = async () => {
  
  // 1. Fetch data directly inside the Server Component
  const bTripleData: BTripPageData | null = await getBTriplePageData();
  
  // Optional: Error/Not Found Handling
  if (!bTripleData) {
    return (
      <div className="text-center p-10">
        <h1>Error</h1>
        <p>Could not load B-Triple page content from the API.</p>
      </div>
    );
  }
  console.log(bTripleData)
  // 2. Destructure the fetched Strapi components (assuming they match your type)
  const { HeroSection, KeyBenefits: FetchedKeyBenefits} = bTripleData;

  return (
    <Container>
      <CommonHero
        title={HeroSection.Title}
        description={HeroSection.Description}
        imageSrc={HeroSection.Media?.url || "/webp/btriple.png"} 
        contain
        cornerText={HeroSection.cornerText}
      />
      <KeyBenefits data={FetchedKeyBenefits} />
      <Expansion data={ExpansionValues} /> 
      
    </Container>
  );
};

export default Page;