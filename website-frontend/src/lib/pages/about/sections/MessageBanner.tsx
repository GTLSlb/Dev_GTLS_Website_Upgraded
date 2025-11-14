import CenterTitle from "@/lib/components/Common/CenterTitle";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { StrapiLink } from "@/lib/services/media";
import { MessageBannerData } from "@/lib/types/banners";
import { MessageDirectorDataType } from "@/lib/types/content";
import Image from "next/image";

type MessageBannerProps={
  data: MessageDirectorDataType}

const MessageBanner: React.FC<MessageBannerProps> = ({ data }) => {
  return (
    <SectionContainer className="relative">
      <CenterTitle
        title={data.title}
        placement="left"
        titleColor="text-gold"
        className="!mt-0"
      />

      <div className="bg-gold rounded-t-4xl relative rounded-br-4xl p-15 py-15 md:mt-24">
        <Image
          src="/svgs/whiteTiger.svg"
          alt="Director"
          width={500}
          height={300}
          className="object-cover absolute -bottom-0 right-10"
        />
        <Image
          src="/svgs/bottomTiger.svg"
          alt="Director"
          width={700}
          height={400}
          className="object-cover absolute -top-0 left-0"
        />
        <Image
          src={StrapiLink(data.Img.url)}
          alt="Director"
          width={500}
          height={400}
          className="object-cover hidden lg:inline absolute -bottom-0 -left-15 xl:left-0"
        />
        <div className="flex flex-col lg:flex-row gap-15">
          <div className="relative  w-full lg:w-1/3 rounded-4xl ">
            <Image
              src={StrapiLink(data.Img.url)}
              alt="Director"
              height={100}
              width={600}
              className="object-cover lg:hidden rounded-4xl"
            />
          </div>
          <div className="flex flex-col w-full lg:w-2/3 gap-7">
            <div className="relative w-18 h-14">
              <Image src="/svgs/quotes.svg" alt="Director" fill className="" />
            </div>
            {/* <Quote className="text-white" size={60} /> */}
            <TextWrapper
              text={data.content}
              fontFamily="dmSans"
              styleType="body"
              className="text-white"
            />
            <div className="flex flex-col">
              <TextWrapper
                text={data.imgSrc}
                fontFamily="dmSans"
                styleType="title4"
                className="text-white"
              />
              <TextWrapper
                text={data.imgSrc}
                fontFamily="dmSans"
                styleType="body"
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default MessageBanner;
