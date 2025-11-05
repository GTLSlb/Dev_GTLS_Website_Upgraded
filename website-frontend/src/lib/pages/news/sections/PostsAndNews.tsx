import SectionContainer from "@/lib/components/Containers/sectionContainer";
import RecentPosts from "../components/RecentPosts";
import RecentNews from "../components/RecentNews";
import { news } from "@/lib/data";
import SearchBar from "./SearchBar";

const PostsAndNews = () => {
  return (
    <SectionContainer className="flex flex-col gap-8">
      <SearchBar />
      <div className="flex flex-col md:flex-row gap-8">
        <RecentPosts items={news} />
        <RecentNews items={news} />
      </div>
    </SectionContainer>
  );
};

export default PostsAndNews;
