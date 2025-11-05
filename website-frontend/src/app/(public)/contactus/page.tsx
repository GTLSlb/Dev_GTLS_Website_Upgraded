import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import BookMeeting from "@/lib/pages/contactus/sections/BookMeeting";
import ContactUs from "@/lib/pages/contactus/sections/ContactUs";
import SmarterLogistics from "@/lib/pages/contactus/sections/SmarterLogistics";
import { SmartLogisticsInfo } from "@/lib/data";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Let’s Connect & Collaborate"
        subtitle="We’re Ready to Support Your Next Move"
        description="Whether you’re ready to partner, looking for pricing, or simply have a question — our team is here to help. Explore the options below to get started."
        imageSrc="/webp/3movers.webp"
        cornerText="Talk with an expert"
      />
      <BookMeeting />
      <ContactUs />
      <SmarterLogistics {...SmartLogisticsInfo} />
    </Container>
  );
};

export default Page;
