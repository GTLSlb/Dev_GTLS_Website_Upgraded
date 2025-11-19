import { ContentListType } from "@/lib/types";
import TextWrapper from "./TextWrapper";

interface StoryProps {
  data: ContentListType;
}

const ContentList: React.FC<StoryProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="flex flex-col w-full h-auto md:w-5/12 gap-4 border p-6 rounded-xl border-color-[#6e6f7a]">
        <TextWrapper
          text={data.title}
          fontFamily="funnel"
          styleType="title2"
          className="text-gold"
        />
        <TextWrapper
          text={data.subtitle}
          fontFamily="dmSans"
          styleType="title4"
        />
        <TextWrapper
          text={data.description}
          fontFamily="dmSans"
          styleType="body"
        />
        <div className="flex flex-col gap-4">
          {data?.numbers?.map((item, index) => (
            <div key={index} className="flex flex-col gap-0">
              <TextWrapper
                text={item.value}
                fontFamily="funnel"
                styleType="largeTitle2"
              />
              <TextWrapper
                text={item.label}
                fontFamily="dmSans"
                styleType="bodySmall"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex w-full md:w-7/12 flex-col gap-6">
        {data.list.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-4">
            <item.icon className="w-6 h-6 text-gold" />
            <TextWrapper
              text={item.title}
              fontFamily="funnel"
              styleType="title4"
            />
            <TextWrapper
              text={item.description}
              fontFamily="dmSans"
              styleType="body"
            />
            <div className="w-full h-0.25 bg-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContentList;
