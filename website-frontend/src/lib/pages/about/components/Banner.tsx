import TextWrapper from "@/lib/components/Common/TextWrapper";
import { BannerProps } from "@/lib/types";
import Image from "next/image";

const Banner: React.FC<BannerProps> = ({ title, items, imageSrc, imageAlt = "Banner Image" }) => {
  return (
    <div className="bg-creamy rounded-t-4xl flex gap-20 flex-col items-center md:flex-row rounded-br-4xl p-10">
      {/* Left Content */}
      <div className="flex flex-col gap-5 w-full md:w-4/6">
        <TextWrapper
          text={title}
          fontFamily="funnel"
          styleType="title1"
          className="text-gold"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-20 h-full">
          {items?.map((item, index) => (
            <div key={index} className="flex flex-col gap-0">
              <TextWrapper text={item.title} fontFamily="dmSans" styleType="title4" />
              <TextWrapper text={item.subtitle} fontFamily="dmSans" styleType="bodySmall" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="relative mx-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
