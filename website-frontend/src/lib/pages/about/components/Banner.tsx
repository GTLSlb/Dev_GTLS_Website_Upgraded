import TextWrapper from "@/lib/components/Common/TextWrapper";
import { StrapiLink } from "@/lib/services/media";
import { BannerDataType } from "@/lib/types/banners";
import Image from "next/image";

interface BannerProps {
  data: BannerDataType;
}
const Banner: React.FC<BannerProps> = ({data}: BannerProps) => {
  return (
    <div className="bg-creamy rounded-t-4xl flex gap-20 flex-col items-center md:flex-row rounded-br-4xl p-10">
      {/* Left Content */}
      <div className="flex flex-col gap-5 w-full md:w-4/6">
        <TextWrapper
          text={data.title}
          fontFamily="funnel"
          styleType="title1"
          className="text-gold"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-20 h-full">
          {data.IntegratedModelItem?.map((item, index) => (
            <div key={index} className="flex flex-col gap-0">
              <TextWrapper text={item.title} fontFamily="dmSans" styleType="title4" />
              <TextWrapper text={item.description} fontFamily="dmSans" styleType="bodySmall" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="relative mx-auto">
        <Image
          src={StrapiLink(data.ImgSrc.url)}
          alt={data.title}
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
