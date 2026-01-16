'use client';

import SectionContainer from "@/lib/components/Containers/sectionContainer";
import RecentPosts, { RecentPostsProps } from "../components/RecentPosts";
import RecentNews, { RecentNewsProps } from "../components/RecentNews";
import SearchBar from "./SearchBar";
import { NewsLetterType, PostsType, RecentNewsType } from "@/lib/types/news";

type PostsAndNewsProps = {
    posts:PostsType, 
    news:RecentNewsType
    NewsLetter:NewsLetterType
};


const PostsAndNews = ({posts,news,NewsLetter}:PostsAndNewsProps) => {
  return (
    <SectionContainer className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-8">
        <RecentPosts NewsletterData={NewsLetter} postsData={posts} />
        <RecentNews {...news} />
      </div>
    </SectionContainer>
  );
};

export default PostsAndNews;
