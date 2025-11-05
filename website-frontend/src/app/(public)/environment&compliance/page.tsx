import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Recycling from "@/lib/pages/environment&compliance/sections/Recycling";
import GreenPractices from "@/lib/pages/environment&compliance/sections/GreenPractices";
import SafetyAndCompliance from "@/lib/pages/environment&compliance/sections/SafetyAndCompliance";
import Partners from "@/lib/pages/environment&compliance/sections/Partners";
import Fatigue from "@/lib/pages/environment&compliance/sections/Fatigue";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Sustainability & Compliance"
        subtitle="Building a safer, greener future in logistics."
        description="We lead with eco-conscious practices, certified compliance, and a strong focus on safety and driver well-being — ensuring sustainable, responsible logistics."
        imageSrc="/pages/compliance.png"
        cornerText="Contatc Us"
      />
      <Recycling />
      <GreenPractices />
      <SafetyAndCompliance />
      <Partners />
      <Fatigue/>
      {/* <EnvironmentList /> */}
    </Container>
  );
};

export default Page;
