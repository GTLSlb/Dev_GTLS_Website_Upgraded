import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import History from "@/lib/pages/about/sections/History";
import BannerSection from "@/lib/pages/about/sections/BannerSection";
import OurStory from "@/lib/pages/about/sections/OurStory";
import Mission from "@/lib/pages/about/sections/Mission";
import WhyLogistics from "@/lib/pages/about/sections/WhyLogistics";
import CoreValues from "@/lib/pages/about/sections/CoreValues";
import Vision from "@/lib/pages/about/sections/Vision";
import MessageBanner from "@/lib/pages/about/sections/MessageBanner";
import { MessageBannerdata } from "@/lib/data";
import OurTeam from "@/lib/pages/about/sections/OurTeam";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Gold Tiger"
        subtitle="A Story of Ambition on Wheels..."
        description="Founded to solve real logistics challenges, Gold Tiger Logistics Solutions began with a single vision: to make freight and supply chain smarter, faster, and more reliable across Australia."
        imageSrc="/webp/3movers.webp"
        cornerText="Talk with an expert"
      />
      {/* <History /> */}
      <OurStory />
      <Mission />
      <Vision />
      <CoreValues />
      <BannerSection />
      <WhyLogistics />
      <MessageBanner data={MessageBannerdata} />
      <OurTeam />
    </Container>
  );
};

export default Page;
