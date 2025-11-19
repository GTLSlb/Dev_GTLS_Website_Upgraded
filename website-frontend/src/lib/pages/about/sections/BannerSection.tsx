import SectionContainer from "@/lib/components/Containers/sectionContainer";
import Banner from "../components/Banner";
import { BannerAboutData } from "@/lib/data";

const BannerSection = () => {
  return (
    <SectionContainer className="!pt-0">
      <Banner {...BannerAboutData} />
    </SectionContainer>
  );
};
export default BannerSection;
