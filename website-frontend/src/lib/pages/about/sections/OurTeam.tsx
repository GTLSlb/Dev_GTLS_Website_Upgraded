import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import ProfileSlider from "../components/ProfileSlider";
import { OurTeamDataType } from "@/lib/types/profiles";
import { MeetTeamDataType } from "@/lib/types/content";

type OurTeamProps = {
  data: MeetTeamDataType;
};

const OurTeam = ({ data }: OurTeamProps) => {
  return (
    <SectionContainer>
      <CenterTitle
        title={data.title} // <-- Use data from object
        titleColor="text-gold"
        description={data.description} // <-- Use data from object
        className="!mt-0"
      />
      {/* ProfileSlider now receives OurTeamData.profiles, which is guaranteed 
        to be a ProfileItem[] array, perfectly matching its expected props. 
      */}
      <ProfileSlider items={data.Members} />
    </SectionContainer>
  );
};
export default OurTeam;
