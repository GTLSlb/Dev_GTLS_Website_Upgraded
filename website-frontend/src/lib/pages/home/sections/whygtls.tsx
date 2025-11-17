import CenterTitle from "@/lib/components/Common/CenterTitle";
import UnevenGrid from "@/lib/components/Common/UnevenGrid";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { WhyGtlsDataTypes } from "@/lib/types/content";
import Image from "next/image";
import tiger from '../../../../../public/svgs/tiger.svg';

type WhyGtlsDataProps = {
  data: WhyGtlsDataTypes;
};

const WhyGtls = ({ data }: WhyGtlsDataProps) => {

  return (
    <SectionContainer
      className="!pt-0 overflow-hidden"
      parentClassName="bg-gold relative overflow-hidden"
    >
      {/* Background Image */}
        <Image
          src={tiger}
          alt="Tiger"
          width={700}
          height={700}
          className="absolute left-0 -bottom-90 z-0"
        />

      {/* Foreground content */}
      <div className="relative z-10">
        <CenterTitle
          title={data.title}
          titleColor="text-white"
          description={data.description}
          buttonText={data.quote}
          dark
        />
        <UnevenGrid items={data.data} />
      </div>
    </SectionContainer>
  );
};

export default WhyGtls;