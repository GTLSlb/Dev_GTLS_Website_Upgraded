import CenterTitle from "@/lib/components/Common/CenterTitle";
import Container from "@/lib/components/Containers/container";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import NewsCard from "@/lib/pages/news/components/NewsCard";
import NewsList from "@/lib/pages/news/components/NewsList";
import { getNewsPageData } from "@/lib/services/api";
import { NewsPage } from "@/lib/types/news";


const Page = async () => {
    const news_page_data: NewsPage = await getNewsPageData();
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
