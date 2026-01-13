import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import NewsSlider from "../components/NewsSlider";
import FloatingBanner from "@/lib/components/Common/FloatingBanner";
import { NewsSliderDataType } from "@/lib/types/news";

type NewsProps = {
  data : NewsSliderDataType
};

const News = ({ data }: NewsProps) => {

  return (
    <SectionContainer parentClassName="relative overflow-hidden">
      <CenterTitle
        title={data.title}
        description={data.description}
        buttonText={"Read More News"}
        buttonVariant={"default"}
        className="!mt-0 !mb-5"
        link={"/news"}
        onButtonClick={() => {}}
      />
      <NewsSlider news={data.SliderItems} />
    </SectionContainer>
  );
};
export default News;
