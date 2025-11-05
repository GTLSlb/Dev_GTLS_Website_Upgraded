import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import NewsSlider from "../components/NewsSlider";
import { NewsData } from "@/lib/data";
import FloatingBanner from "@/lib/components/Common/FloatingBanner";

const News = () => {
  return (
    <SectionContainer  parentClassName="relative overflow-hidden">
      <FloatingBanner
        iconSrc="/svgs/distribution.svg"
        text="Get in touch"
        className="absolute top-40 -right-10"
      />
      <CenterTitle
        title="News"
        description="Stay updated with the latest news, industry trends, and behind the scenes stories from Gold Tiger. From expert tips to company milestones — our blog keeps you in the loop."
        buttonText={"Read More News"}
        buttonVariant={"default"}
        className="!mt-0"
      />
      <NewsSlider news={NewsData} />
    </SectionContainer>
  );
};
export default News;
