import ContentList from "@/lib/components/Common/ContentList";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { contactUsData } from "@/lib/data";

const BookMeeting = () => {
  return (
    <SectionContainer>
      <ContentList data={contactUsData} />
    </SectionContainer>
  );
};
export default BookMeeting;
