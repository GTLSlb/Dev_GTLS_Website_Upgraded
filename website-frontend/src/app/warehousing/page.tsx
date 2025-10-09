import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import { FacilitiesGridData, LocationsData } from "@/lib/data";
import Facilities from "@/lib/pages/warehousing/sections/Facilities";
import Cards from "@/lib/pages/warehousing/sections/Cards";
import Locations from "@/lib/pages/warehousing/sections/Locations";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Smart, Scalable Warehousing Built for Your Business"
        // subtitle="Move More. Spend Less. Reduce Emissions."
        description="From secure pallet storage to integrated inventory management, our warehousing solutions are tailored to meet your unique logistics needs."
        imageSrc="/webp/transporthero.webp"
        cornerText="Talk with an expert"
      />
      <Facilities {...FacilitiesGridData} />
      <Locations {...LocationsData} />
      <Cards />
    </Container>
  );
};

export default Page;
