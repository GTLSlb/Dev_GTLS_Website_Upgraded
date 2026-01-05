"use client";
import CenterTitle from "@/lib/components/Common/CenterTitle";
import Container from "@/lib/components/Containers/container";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import NewsCard from "@/lib/pages/news/components/NewsCard";
import NewsList from "@/lib/pages/news/components/NewsList";
import { useNewsPageData } from "@/lib/hooks/use-strapi-data";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";


const Page = () => {
  const { data: news_page_data, loading, error } = useNewsPageData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!news_page_data) return <ErrorMessage error={new Error('No data available')} />;
  return (
    <SectionContainer className="!pt-20 flex flex-col gap-0">
       <CenterTitle
        title={news_page_data.RecentNews.title}
        placement="center"
        titleColor="text-gold"
        description="Latest news and updates from our fleet management world."
      />
      <NewsList NewsList={news_page_data.RecentNews.news_items} />
    </SectionContainer>
  );
};

export default Page;
