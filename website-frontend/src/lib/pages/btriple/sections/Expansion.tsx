import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { ExpansionValues } from "@/lib/data";
import ExpansionCard from "../components/ExpansionCard";
import CenterTitle from "@/lib/components/Common/CenterTitle";
import { ExpansionDataType } from "@/lib/types/grids";

type ExpansionProps = {
  data: ExpansionDataType;
};

const Expansion = ({data}: ExpansionProps) => {
  return (
    <SectionContainer>
      <CenterTitle
        title={data.title}
        placement="left"
        titleColor="text-gold"
        className="!mt-0"
      />
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-6">
        {data.points.map((value, index) => (
          <ExpansionCard key={index} value={value} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Expansion;
