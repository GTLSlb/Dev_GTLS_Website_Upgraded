import SectionContainer from "@/lib/components/Containers/sectionContainer";
import HistoryCarousel from "../components/HistoryCarousel";
import CenterTitle from "@/lib/components/Common/CenterTitle";

const History = () => {
  return (
    <SectionContainer>
        <CenterTitle title="GTLS History" placement="left" titleColor="text-gold"/>
      <HistoryCarousel />
    </SectionContainer>
  );
};
export default History;
