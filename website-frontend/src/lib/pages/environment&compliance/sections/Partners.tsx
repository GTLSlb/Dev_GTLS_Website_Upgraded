import ImageAndText from "@/lib/components/Common/ImageAndText";
import SectionContainer from "@/lib/components/Containers/sectionContainer";

const PartnersData = {
  imgSrc: "/globe.svg",
  title: "Partners & Certifications",
  description:
    "At Gold Tiger Logistics Solutions, we take pride in partnering with industry leaders and maintaining globally recognized standards. As a Golden Volvo Partner, we align with Volvo’s excellence in safety, performance, and sustainability, ensuring our fleet operates with the highest reliability and environmental efficiency.\n\n We are also SQF (Safe Quality Food) and HACCP certified, reflecting our unwavering commitment to food safety and quality management. These certifications guarantee that our storage and handling practices meet strict international standards, ensuring the safe transport of goods across every stage of our logistics operations.\n\n Gold Tiger’s partnerships and certifications demonstrate our dedication to excellence, compliance, and continuous improvement delivering trusted and reliable logistics solutions every time.",
};
const Partners = () => {
  return (
    <SectionContainer>
      <ImageAndText {...PartnersData} imageFirst={false} />
    </SectionContainer>
  );
};

export default Partners;
