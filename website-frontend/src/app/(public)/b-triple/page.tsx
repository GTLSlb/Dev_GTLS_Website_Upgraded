import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import KeyBenefits from "@/lib/pages/btriple/sections/KeyBenefits";
import Expansion from "@/lib/pages/btriple/sections/Expansion";
import { CommonHeroDataType } from "@/lib/types/hero";
import { BTriplesData, ExpansionValues } from "@/lib/data";

export const btripleData: CommonHeroDataType = {
  title: "B-Triple",
  description:
    "Gold Tiger Logistics Solutions has expanded its B-Triple fleet nationwide following a successful 2024 launch, doubling capacity to meet growing freight demand and enhance sustainable, high-efficiency transport across Australia’s major routes.",
  imageSrc: "/webp/btriple.png",
  cornerText: "Talk with an expert",
};
const Page = () => {
  return (
    <Container>
      <CommonHero
        title={btripleData.title}
        description={btripleData.description}
        imageSrc={btripleData.imageSrc}
        contain
        cornerText={btripleData.cornerText}
      />
      <KeyBenefits data={BTriplesData} />
      <Expansion data={ExpansionValues} />
    </Container>
  );
};

export default Page;
