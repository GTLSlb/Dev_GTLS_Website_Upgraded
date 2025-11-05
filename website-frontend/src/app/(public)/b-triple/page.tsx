import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import KeyBenefits from "@/lib/pages/btriple/sections/KeyBenefits";
import Expansion from "@/lib/pages/btriple/sections/Expansion";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="B-Triple"
        description="Following the successful launch of our B-Triple configurations in November 2024, Gold Tiger Logistics Solutions is proud to announce the expansion of this high-capacity, fuel-efficient transport solution with operations now extended across major freight routes including Brisbane–Melbourne, Sydney–Melbourne, Melbourne–Adelaide, and NSW–Adelaide. In response to strong customer demand and sustained freight growth, we have doubled our B-Triple fleet, further strengthening our ability to deliver reliable, cost-effective, and sustainable transport solutions across Australia’s key logistics corridors."
        imageSrc="/webp/btriple.png"
        contain
        cornerText="Talk with an expert"
      />
      <KeyBenefits />
      <Expansion />
    </Container>
  );
};

export default Page;
