import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import IntegratedSolutions from "@/lib/pages/transport/sections/IntegratedSolutions";
import { IntegratedSolutionsData } from "@/lib/data";
import Services from "@/lib/pages/transport/sections/Services";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Transport Solutions"
        subtitle="Move More. Spend Less. Reduce Emissions."
        description="Our expanding B-Triple fleet offers high-volume, long-haul transport that delivers greater efficiency, fewer road trips, and lower environmental impact."
        imageSrc="/webp/transporthero.webp"
        cornerText="B-Triple"
        link="/b-triple"
      />
      <IntegratedSolutions items={IntegratedSolutionsData} />
      <Services />
    </Container>
  );
};

export default Page;
