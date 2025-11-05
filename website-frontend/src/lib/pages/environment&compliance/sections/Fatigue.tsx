import ImageAndText from "@/lib/components/Common/ImageAndText";
import SectionContainer from "@/lib/components/Containers/sectionContainer";

const FatigueData = {
  imgSrc: "/pages/fatigue.png",
  title: "Fatigue management",
  description:
    "At Gold Tiger Logistics Solutions, driver safety and well-being are top priorities. We are NHVR (National Heavy Vehicle Regulator) certified, ensuring our fatigue management practices meet the highest regulatory standards.\n\n Our robust fatigue management program includes scheduled rest breaks, route planning to minimize driver strain, and ongoing training to help drivers recognize and manage fatigue. By combining regulatory compliance with proactive safety measures, we ensure our drivers stay alert, safe, and fully capable of delivering goods efficiently and responsibly.\n\n At Gold Tiger Logistics Solutions, every soul matters. We ensure that each driver operates in a safe, supportive environment; by prioritizing our drivers’ health and safety, we protect not only our team but every road user, reflecting our belief that safety and care are at the heart of everything we do.",
};
const Fatigue = () => {
  return (
    <SectionContainer>
      <ImageAndText {...FatigueData} />
    </SectionContainer>
  );
};

export default Fatigue;
