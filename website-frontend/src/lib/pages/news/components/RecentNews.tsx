import { RecentNewsProps } from "@/lib/types";
import NewsCard from "./NewsCard";
import CenterTitle from "@/lib/components/Common/CenterTitle";

const RecentNews = ({ items }: RecentNewsProps) => {
  return (
    <div className="flex flex-col gap-0 w-full md:w-7/12">
      <CenterTitle
        title="Recent News"
        placement="left"
        titleColor="text-black"
      />
      <div className="flex flex-col gap-8">
        {items.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
