import SectionContainer from "@/lib/components/Containers/sectionContainer";
import ExpansionCard from "../components/ExpansionCard";
import CenterTitle from "@/lib/components/Common/CenterTitle";
import { Expansion as ExpansionType } from "@/lib/types/pages";

type ExpansionProps = {
  data: ExpansionType;
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
        {data.data?.map((value, index) => (
          <ExpansionCard key={index} value={value} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Expansion;
