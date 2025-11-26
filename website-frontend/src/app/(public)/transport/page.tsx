'use client';

import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import IntegratedSolutions from "@/lib/pages/transport/sections/IntegratedSolutions";
import Services from "@/lib/pages/transport/sections/Services";
import { transport_page_data } from "@/lib/data";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title={transport_page_data.HeroSection.Title}
        subtitle={transport_page_data.HeroSection.Subtitle}
        description={transport_page_data.HeroSection.Description}
        imageSrc={process.env.NEXT_PUBLIC_STRAPI_URL+transport_page_data.HeroSection.Media.url}
        cornerText={transport_page_data.HeroSection.cornerText}
        link="/b-triple"
      />
      <IntegratedSolutions data={transport_page_data.IntegratedSolutions} />
      <Services data={transport_page_data.TransportServices}/>
    </Container>
  );
};

export default Page;
