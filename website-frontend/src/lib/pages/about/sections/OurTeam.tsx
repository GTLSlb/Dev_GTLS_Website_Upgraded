import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { ProfileData } from "@/lib/data";
import ProfileSlider from "../components/ProfileSlider";

const OurTeam = () => {
  return (
    <SectionContainer>
      <CenterTitle
        title="Meet Our Team"
        titleColor="text-gold"
        description="Our people are the heart of Gold Tiger Logistics. Skilled, dedicated, and passionate. They’re the ones keeping your supply chain moving every day."
        className="!mt-0"
      />
      <ProfileSlider items={ProfileData} />
    </SectionContainer>
  );
};
export default OurTeam;
