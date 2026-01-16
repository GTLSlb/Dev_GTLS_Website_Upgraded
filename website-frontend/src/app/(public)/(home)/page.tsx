"use client";
import Container from "@/lib/components/Containers/container";
import Services from "@/lib/pages/home/sections/services";
import Hero from "@/lib/pages/home/sections/hero";
import WhyGtls from "@/lib/pages/home/sections/whygtls";
import CustomerHub from "@/lib/pages/home/sections/CustomerHub";
import News from "@/lib/pages/home/sections/News";
import { useHomePageData } from "@/lib/hooks/use-strapi-data";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";
import Gtrs from "@/lib/pages/home/sections/Gtrs";

const Page = () => {
  const { data: home_page_data, loading, error } = useHomePageData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!home_page_data) return <ErrorMessage error={new Error('No data available')} />;

  return (
    <Container>
      <Hero data={home_page_data.HeroSection} />
      <Services data={home_page_data.Services} />
      <WhyGtls data={home_page_data.Services.WhyGtls} />
      {/* <CustomerHub data={home_page_data.Services.CustomerHub} /> */}
      <Gtrs data={home_page_data.GTRS} />
      <News data={home_page_data.Services.News[0]} />
    </Container>
  );
};

export default Page;
