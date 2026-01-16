"use client";

import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import HubspotForms from "@/lib/pages/contactus/components/HubspotForms";
import { useContactUsPageData } from "@/lib/hooks/use-strapi-data";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";
import { StrapiLink } from "@/lib/services/media";

const Page = () => {
  const { data: contact_page_data, loading, error } = useContactUsPageData();
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!contact_page_data) return <ErrorMessage error={new Error('No data available')} />;

  return (
    <Container>
      <CommonHero
        title={contact_page_data.HeroSection.Title}
        subtitle={contact_page_data.HeroSection.Subtitle}
        description={contact_page_data.HeroSection.Description}
        imageSrc={StrapiLink(contact_page_data.HeroSection.Media.url)}
        cornerText={contact_page_data.HeroSection.cornerText}
        link={contact_page_data.HeroSection.link || "contactus"}
      />
      <HubspotForms />
      {/* <BookMeeting /> */}
      {/* <ContactUs /> */}
      {/* <SmarterLogistics {...SmartLogisticsInfo} /> */}
    </Container>
  );
};

export default Page;
