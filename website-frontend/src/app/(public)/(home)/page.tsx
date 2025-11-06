import Container from "@/lib/components/Containers/container";
import Services from "@/lib/pages/home/sections/services";
import Hero from "@/lib/pages/home/sections/hero";
import WhyGtls from "@/lib/pages/home/sections/whygtls";
import CustomerHub from "@/lib/pages/home/sections/CustomerHub";
import News from "@/lib/pages/home/sections/News";
import { customerHubData, HeroData, NewsData, serviceData, WhyGtlsData } from "@/lib/data";

const Page = () => {
  return (
    <Container>
      <Hero data={HeroData} />
      <Services data={serviceData} />
      <WhyGtls data={WhyGtlsData} />
      <CustomerHub data={customerHubData} />
      <News data={NewsData} />
    </Container>
  );
};

export default Page;
