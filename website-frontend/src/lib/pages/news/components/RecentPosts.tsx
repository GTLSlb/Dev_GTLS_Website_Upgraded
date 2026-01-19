import CenterTitle from "@/lib/components/Common/CenterTitle";
import PostCard from "./PostCard";
import { Button } from "@/lib/ui/button";
import Newsletter from "./Newsletter";
import { NewsLetterType, PostsType } from "@/lib/types/news";
import { ScrollArea } from "@/lib/ui/scroll-area";

export type RecentPostsProps = {
  postsData: PostsType;
  NewsletterData: NewsLetterType;
};


const RecentPosts = ({
  postsData: { title, posts },
  NewsletterData,
}: RecentPostsProps) => {
  return (
    <div className=" w-full flex flex-col gap-10 md:w-5/12">
      <div className="flex flex-col px-6 pb-6 gap-0 border border-color-[#6e6f7a] rounded-3xl h-auto">
        <CenterTitle title={title} placement="left" titleColor="text-gold" />
        <ScrollArea className=" sm:max-h-[600px] pr-2">
          {posts?.map((news, index) => (
            <PostCard key={index} {...news} />
          ))}
        </ScrollArea>
      </div>
      <Newsletter {...NewsletterData} />
    </div>
  );
};

export default RecentPosts;
