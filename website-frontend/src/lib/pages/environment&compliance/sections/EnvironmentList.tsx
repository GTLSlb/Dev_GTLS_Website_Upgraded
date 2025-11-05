import HorizontalCard from "@/lib/components/Common/HorizontalCard";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { EnvironmentData } from "@/lib/data";

const EnvironmentList = () => {
   return (
    <SectionContainer>
      <div className="flex flex-col gap-10">
        {EnvironmentData.map((item) => (
          <HorizontalCard key={item.title} {...item} color="green" />
        ))}
      </div>
    </SectionContainer>
  );
};

export default EnvironmentList