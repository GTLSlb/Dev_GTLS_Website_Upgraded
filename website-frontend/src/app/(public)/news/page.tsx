"use client";
import Container from "@/lib/components/Containers/container";
import PostsAndNews from "@/lib/pages/news/sections/PostsAndNews";
import CommonHero from "@/lib/components/Common/CommonHero";
import { StrapiLink } from "@/lib/services/media";
import { useNewsPageData } from "@/lib/hooks/use-strapi-data";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";

const Page = () => {
  const { data: news_page_data, loading, error } = useNewsPageData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!news_page_data) return <ErrorMessage error={new Error('No data available')} />;
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
