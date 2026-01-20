"use client";
import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Services from "@/lib/pages/transport/sections/Services";
import { useTransportPageData } from "@/lib/hooks/use-strapi-data";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";
import Solutions from "@/lib/pages/transport/sections/Solutions";
import { URLs } from "@/lib/utils/constants";
const Page = () => {
  const { data: transport_page_data, loading, error } = useTransportPageData();
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!transport_page_data) return <ErrorMessage error={new Error('No data available')} />;
  
  return (
    <Container>
      <CommonHero
        title={transport_page_data.HeroSection.Title}
        subtitle={transport_page_data.HeroSection.Subtitle}
        description={transport_page_data.HeroSection.Description}
        imageSrc={transport_page_data.HeroSection.Media}
        cornerText={transport_page_data.HeroSection.cornerText}
        link={transport_page_data.HeroSection.link}
      />
      <Solutions data={transport_page_data.TransportSolutions} />
      {/* <IntegratedSolutions data={transport_page_data.IntegratedSolutions} /> */}
      <Services data={transport_page_data.TransportServices}/>
    </Container>
  );
};

export default Page;
