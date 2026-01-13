import { RecentNewsType, RecentPostsDataType } from "@/lib/types/news";
import NewsCard from "./NewsCard";
import CenterTitle from "@/lib/components/Common/CenterTitle";
import { Button } from "@/lib/ui/button";
import Link from "next/link";

export type RecentNewsProps = RecentNewsType;

const RecentNews = ({ title, news_items }: RecentNewsProps) => {
  return (
    <div className="flex flex-col gap-0 w-full md:w-7/12">
      <CenterTitle title={title} placement="left" titleColor="text-black" />
      <div className="flex flex-col gap-8">
        {news_items?.slice(0, 3).map((news, index) => (
          <NewsCard key={news.id ?? index} {...news} />
        ))}
      </div>
      <Link href="/all-news" className="w-full">
        <Button
          variant={"outline"}
          className="text-gold border-gold w-full rounded-full mt-5 hover:bg-gold hover:text-creamy hover:cursor-pointer"
        >
          View All
        </Button>
      </Link>
    </div>
  );
};

export default RecentNews;
