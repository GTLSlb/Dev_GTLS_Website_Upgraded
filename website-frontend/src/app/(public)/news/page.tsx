import Container from "@/lib/components/Containers/container";
import PostsAndNews from "@/lib/pages/news/sections/PostsAndNews";
import { newsData,postsData } from "@/lib/data";
import CommonHero from "@/lib/components/Common/CommonHero";
import { StrapiLink } from "@/lib/services/media";
import { getNewsPageData } from "@/lib/services/api";
import { NewsPage } from "@/lib/types/news";



const Page = async () => {
  
  // 1. Fetch data directly inside the Server Component
  const news_page_data: NewsPage  = await getNewsPageData();
  return (
    <Container>
      <CommonHero
        title={news_page_data.HeroSection.Title}
        subtitle={news_page_data.HeroSection.Subtitle}
        description={news_page_data.HeroSection.Description}
        imageSrc={StrapiLink(news_page_data.HeroSection.Media.url)}
        cornerText={news_page_data.HeroSection.cornerText}
      />
      {/* <SearchBar /> */}
      <PostsAndNews NewsLetter={news_page_data.NewsLetter} posts={news_page_data.Posts} news={news_page_data.RecentNews} />
    </Container>
  );
};

export default Page;
