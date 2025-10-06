import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { CoreValuesData } from "@/lib/data";
import ValueCard from "../components/ValueCard";

const CoreValues = () => {
    return (
        <SectionContainer>
            <CenterTitle
                title="Core Values"
                placement="left"
                titleColor="text-gold"
                className="!mt-0"
            />
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {CoreValuesData.map((value, index) => (
                <ValueCard key={index} value={value} index={index} />
            ))}
        </div>
        </SectionContainer>
    );
}

export default CoreValues