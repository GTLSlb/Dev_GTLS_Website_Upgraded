import SectionContainer from "@/lib/components/Containers/sectionContainer";
import RecentPosts, { RecentPostsProps } from "../components/RecentPosts";
import RecentNews, { RecentNewsProps } from "../components/RecentNews";
import SearchBar from "./SearchBar";

type PostsAndNewsProps = {
    posts:RecentPostsProps 
    news:RecentNewsProps
};


const PostsAndNews = ({posts,news}:PostsAndNewsProps) => {
  return (
    <SectionContainer className="flex flex-col gap-8">
      <SearchBar />
      <div className="flex flex-col md:flex-row gap-8">
        <RecentPosts {...posts} />
        <RecentNews {...news} />
      </div>
    </SectionContainer>
  );
};

export default PostsAndNews;
