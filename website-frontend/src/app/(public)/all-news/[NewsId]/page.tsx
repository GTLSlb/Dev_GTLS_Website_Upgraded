// app/news/[NewsId]/page.tsx
import { ArrowLeft } from "lucide-react";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import MediaSwiper from "@/lib/pages/news/components/MediaSwiper";
import ShareButtons from "@/lib/pages/news/components/ShareButtons";
import { getSingleNews } from "@/lib/services/api";
import { StrapiLink } from "@/lib/services/media";
import { NewsItem } from "@/lib/types/news";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: { NewsId: string }; // comes from folder name
}

const Page = async ({ params }: PageProps) => {
  const { NewsId } = params;

  const news_item_data:NewsItem = await getSingleNews(NewsId);
  if (!news_item_data) return <div>News not found</div>;

  return (
    <SectionContainer className="!pt-28 flex flex-col gap-8">
      <div className="relative w-full h-96 rounded-4xl rounded-bl-none overflow-hidden">
        <Image
          src={StrapiLink(news_item_data.coverImg.url)}
          alt={news_item_data.title}
          fill
          className="object-cover"
        />
      </div>
      <Link
          href={`/all-news`}
          className="text-gold font-semibold text-xs hover:underline inline-flex items-center gap-1"
        >
          <ArrowLeft size={16}/>
        <span>Back to main</span>
        </Link>
      <div className="flex flex-col gap-2">
        <TextWrapper
          text={news_item_data.newsDate}
          fontFamily="dmSans"
          styleType="link"
          className="text-gold h-10"
        />
        <TextWrapper
          text={news_item_data.title}
          fontFamily="funnel"
          styleType="title1"
          className="text-black"
        />
        <TextWrapper
          text={news_item_data.description}
          fontFamily="dmSans"
          styleType="bodySmall"
          className="text-gray-600"
        />
      </div>
      <TextWrapper
        text={news_item_data.textContent}
        fontFamily="dmSans"
        html
        styleType="body"
        className="text-black"
      />
      <MediaSwiper media={news_item_data.mediaContent} />
      <ShareButtons title={news_item_data.title} />
    </SectionContainer>
  );
};

export default Page;
