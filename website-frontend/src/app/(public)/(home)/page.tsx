'use client';

import Container from "@/lib/components/Containers/container";
import Services from "@/lib/pages/home/sections/services";
import Hero from "@/lib/pages/home/sections/hero";
import WhyGtls from "@/lib/pages/home/sections/whygtls";
import CustomerHub from "@/lib/pages/home/sections/CustomerHub";
import News from "@/lib/pages/home/sections/News";
import { home_page_data } from "@/lib/data";

const Page = () => {
  return (
    <Container>
      <Hero data={home_page_data.HeroSection} />
      <Services data={home_page_data.Services} />
      <WhyGtls data={home_page_data.Services.WhyGtls} />
     <CustomerHub data={home_page_data.Services.CustomerHub} />
       <News data={home_page_data.Services.News[0]} />
    </Container>
  );
};

export default Page;
