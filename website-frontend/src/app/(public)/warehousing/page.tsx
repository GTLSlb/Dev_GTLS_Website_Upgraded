"use client";
import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Facilities from "@/lib/pages/warehousing/sections/Facilities";
import Locations from "@/lib/pages/warehousing/sections/Locations";
import { useWarehousingPageData } from "@/lib/hooks/use-strapi-data";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";

const Page = () => {
  const {
    data: warehousing_page_data,
    loading,
    error,
  } = useWarehousingPageData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!warehousing_page_data)
    return <ErrorMessage error={new Error("No data available")} />;
  return (
    <Container>
      <CommonHero
        title={warehousing_page_data.HeroSection.Title}
        description={warehousing_page_data.HeroSection.Description}
        imageSrc={warehousing_page_data.HeroSection.Media}
        cornerText={warehousing_page_data.HeroSection.cornerText}
      />
      <Facilities data={warehousing_page_data.WhyChooseGtls} />
      <Locations data={warehousing_page_data.WarehousingLocations} />
    </Container>
  );
};

export default Page;
