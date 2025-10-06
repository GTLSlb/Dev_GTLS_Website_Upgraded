import ContentList from "@/lib/components/Common/ContentList";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { StoryData } from "@/lib/data";

const OurStoryOld = () => {
  return (
    <SectionContainer>
      <ContentList data={StoryData} />
    </SectionContainer>
  );
};
export default OurStoryOld;
