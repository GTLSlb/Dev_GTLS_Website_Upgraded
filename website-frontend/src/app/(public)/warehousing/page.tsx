"use client";

import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import { FacilitiesGridData, LocationsData } from "@/lib/data";
import Facilities from "@/lib/pages/warehousing/sections/Facilities";
import Locations from "@/lib/pages/warehousing/sections/Locations";
import { warehousing_page_data } from "@/lib/data";

const Page = async () => {
  return (
    <Container>
      <CommonHero
        title={warehousing_page_data.HeroSection.Title}
        description={warehousing_page_data.HeroSection.Description}
        imageSrc={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          warehousing_page_data.HeroSection.Media.url
        }
        cornerText={warehousing_page_data.HeroSection.cornerText}
      />
      <Facilities data={warehousing_page_data.WhyChooseGtls} />
      <Locations data={warehousing_page_data.WarehousingLocations} />
    </Container>
  );
};

export default Page;
