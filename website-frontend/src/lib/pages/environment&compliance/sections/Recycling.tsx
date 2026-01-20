import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { StrapiLink } from "@/lib/services/media";
import { PicAndMediaItem } from "@/lib/types/content";
import Image from "next/image";

type RecyclingProps = {
  data: PicAndMediaItem;
};

const Recycling = ({ data }: RecyclingProps) => {
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <CenterTitle
            title={data.title}
            titleColor="text-gold"
            placement="left"
            className="!mt-0"
            description={data.description}
          />
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 min-h-96 order-1 md:order-2">
          <Image
            src={StrapiLink(data.ImgSrc.url)}
            placeholder="blur"
            blurDataURL="/Logos/logo-transparent.svg"
            alt={data.ImgSrc.alternativeText}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Recycling;
