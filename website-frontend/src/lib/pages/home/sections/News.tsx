import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import NewsSlider from "../components/NewsSlider";
import { NewsData } from "@/lib/data";
import FloatingBanner from "@/lib/components/Common/FloatingBanner";
import { NewsSliderDataType } from "@/lib/types/news";

type NewsProps = {
  data : NewsSliderDataType
};

const News = ({ data }: NewsProps) => {
  return (
    <SectionContainer parentClassName="relative overflow-hidden">
      <FloatingBanner
        iconSrc="/svgs/nationalmap.svg"
        text="National Road Event"
        className="absolute top-40 -right-10"
      />
      <CenterTitle
        title={data.title}
        description={data.description}
        buttonText={"Read More News"}
        buttonVariant={"default"}
        className="!mt-0"
      />
      <NewsSlider news={data.news} />
    </SectionContainer>
  );
};
export default News;
