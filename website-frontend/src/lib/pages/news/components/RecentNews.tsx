
import { RecentNewsDataType } from "@/lib/types/news";
import NewsCard from "./NewsCard";
import CenterTitle from "@/lib/components/Common/CenterTitle";

export type RecentNewsProps =  RecentNewsDataType;

const RecentNews = ({ title, items }: RecentNewsProps) => {
  return (
    <div className="flex flex-col gap-0 w-full md:w-7/12">
      <CenterTitle
        title={title}
        placement="left"
        titleColor="text-black"
      />
      <div className="flex flex-col gap-8">
        {items?.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
