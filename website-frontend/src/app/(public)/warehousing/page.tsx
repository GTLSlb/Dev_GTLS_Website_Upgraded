import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import { FacilitiesGridData, LocationsData } from "@/lib/data";
import Facilities from "@/lib/pages/warehousing/sections/Facilities";
import Locations from "@/lib/pages/warehousing/sections/Locations";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Warehousing Facilities"
        description="Our warehousing services are designed to be more than just storage, they are a strategic extension of your supply chain. With flexible, secure, and technology-driven facilities, we make sure your goods are always in the right place, at the right time."
        imageSrc="/pages/warehousing.png"
        cornerText="Talk with an expert"
      />
      <Facilities {...FacilitiesGridData} />
      <Locations {...LocationsData} />
    </Container>
  );
};

export default Page;
