import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Industries from "@/lib/pages/industries/sections/Industries";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Industries We Serve"
        subtitle="Tailored Logistics for Every Sector."
        description="At Gold Tiger Logistics Solutions, we recognize that no two industries are the same. Each sector comes with its own supply chain requirements, compliance needs, and customer expectations."
        imageSrc="/webp/3movers.webp"
        cornerText="Talk with an expert"
      />
      <Industries />
    </Container>
  );
};

export default Page;
