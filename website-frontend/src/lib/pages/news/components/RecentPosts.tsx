import CenterTitle from "@/lib/components/Common/CenterTitle";
import { RecentPostsProps } from "@/lib/types";
import PostCard from "./PostCard";
import { Button } from "@/lib/ui/button";
import Newsletter from "./Newsletter";

const RecentPosts = ({ items }: RecentPostsProps) => {
  return (
    <div className=" w-full flex flex-col gap-10 md:w-5/12">
      <div className="flex flex-col px-6 pb-6 gap-0 border border-color-[#6e6f7a] rounded-3xl h-auto">
        <CenterTitle
          title="Recent Post"
          placement="left"
          titleColor="text-gold"
        />
        <div className="flex flex-col gap-8">
          {items?.map((news, index) => (
            <PostCard key={index} {...news} />
          ))}
        </div>
        <Button variant={"outline"} className="text-gold border-gold rounded-full mt-5 hover:bg-gold hover:text-creamy hover:cursor-pointer">View All</Button>
      </div>
      <Newsletter />
    </div>
  );
};

export default RecentPosts;
