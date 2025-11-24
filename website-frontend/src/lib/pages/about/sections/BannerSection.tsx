import SectionContainer from "@/lib/components/Containers/sectionContainer";
import Banner from "../components/Banner";
import { BannerDataType } from "@/lib/types/banners";

type BannerProps ={
  data: BannerDataType
}

const BannerSection = ({data}: BannerProps) => {
  console.log("Banner Section Data:", data);
  return (
    <SectionContainer className="!pt-0">
      <Banner data={data} />
    </SectionContainer>
  );
};
export default BannerSection;
