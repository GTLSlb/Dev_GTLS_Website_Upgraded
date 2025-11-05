import Container from "@/lib/components/Containers/container";
import Services from "@/lib/pages/home/sections/services";
import Hero from "@/lib/pages/home/sections/hero";
import WhyGtls from "@/lib/pages/home/sections/whygtls";
import CustomerHub from "@/lib/pages/home/sections/CustomerHub";
import News from "@/lib/pages/home/sections/News";

const Page = () => {
  return (
    <Container>
      <Hero />
      <Services />
      <WhyGtls />
      <CustomerHub />
      <News />
    </Container>
  );
};

export default Page;
