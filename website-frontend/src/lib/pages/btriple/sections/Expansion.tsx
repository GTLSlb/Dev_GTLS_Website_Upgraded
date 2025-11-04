import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { ExpansionValues } from "@/lib/data";
import ExpansionCard from "../components/ExpansionCard";
import CenterTitle from "@/lib/components/Common/CenterTitle";

const Expansion = () => {
  return (
    <SectionContainer>
      <CenterTitle
        title="Why This Expansion Matters"
        placement="left"
        titleColor="text-gold"
      />
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-6">
        {ExpansionValues.points.map((value, index) => (
          <ExpansionCard key={index} value={value} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Expansion;
