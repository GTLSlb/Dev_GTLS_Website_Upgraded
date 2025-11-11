import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Industries from "@/lib/pages/industries/sections/Industries";
import { CommonHeroDataType } from "@/lib/types/hero";
import { IndustriesData } from "@/lib/data";

export const industriesHeroData: CommonHeroDataType = {
  title: "Industries We Serve",
  subtitle:"Tailored Logistics for Every Sector.",
  description:"At Gold Tiger Logistics Solutions, we recognize that no two industries are the same. Each sector comes with its own supply chain requirements, compliance needs, and customer expectations.",
  imageSrc: "/pages/industries.png",
  cornerText: "Talk with an expert",
};

const Page = () => {
  return (
    <Container>
      <CommonHero
        title={industriesHeroData.title}
        subtitle={industriesHeroData.subtitle}
        description={industriesHeroData.description}
        imageSrc={industriesHeroData.imageSrc}
        cornerText={industriesHeroData.cornerText}
      />
      <Industries data={IndustriesData} />
    </Container>
  );
};

export default Page;
