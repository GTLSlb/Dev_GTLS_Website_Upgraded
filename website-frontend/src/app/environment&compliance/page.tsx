import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import EnvironmentList from "@/lib/pages/environment&compliance/sections/EnvironmentList";
import Recycling from "@/lib/pages/environment&compliance/sections/Recycling";
import GreenPractices from "@/lib/pages/environment&compliance/sections/GreenPractices";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Sustainability & Compliance"
        subtitle="Building a safer, greener future in logistics."
        description="We lead with eco-conscious practices, certified compliance, and a strong focus on safety and driver well-being — ensuring sustainable, responsible logistics."
        imageSrc="/webp/3movers.webp"
        cornerText="Contatc Us"
      />
      <Recycling />
      <GreenPractices />
      <EnvironmentList />
    </Container>
  );
};

export default Page;
