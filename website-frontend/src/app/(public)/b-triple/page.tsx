import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import KeyBenefits from "@/lib/pages/btriple/sections/KeyBenefits";
import Expansion from "@/lib/pages/btriple/sections/Expansion";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="B-Triple"
        description="Gold Tiger Logistics Solutions has expanded its B-Triple fleet nationwide following a successful 2024 launch, doubling capacity to meet growing freight demand and enhance sustainable, high-efficiency transport across Australia’s major routes."
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
