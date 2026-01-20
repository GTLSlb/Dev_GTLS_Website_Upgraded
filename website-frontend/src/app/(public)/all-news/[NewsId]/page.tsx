// app/news/[NewsId]/page.tsx
"use client";
import { ArrowLeft } from "lucide-react";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import DomPurifyWrapper from "@/lib/components/Common/DomPurifyWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import MediaSwiper from "@/lib/pages/news/components/MediaSwiper";
import ShareButtons from "@/lib/pages/news/components/ShareButtons";
import { useSingleNews } from "@/lib/hooks/use-strapi-data";
import { StrapiLink } from "@/lib/services/media";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "@/lib/components/Common/LoadingSpinner";
import ErrorMessage from "@/lib/components/Common/ErrorMessage";

interface PageProps {
  params: { NewsId: string }; // comes from folder name
}

const Page = ({ params }: PageProps) => {
  const { NewsId } = params;
  const { data: news_item_data, loading, error } = useSingleNews(NewsId);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!news_item_data) return <ErrorMessage error={new Error('News not found')} />;

  return (
    <SectionContainer className="!pt-28 flex flex-col gap-8">
      <div className="relative w-full h-96 rounded-4xl rounded-bl-none overflow-hidden">
        <Image
          src={StrapiLink(news_item_data.coverImg.url)}
          placeholder="blur"
          blurDataURL="/Logos/logo-transparent.svg"
          alt={news_item_data.coverImg.alternativeText}
          fill
          className="object-cover"
        />
      </div>
      <Link
        href={`/all-news`}
        className="text-gold font-semibold text-xs hover:underline inline-flex items-center gap-1"
      >
        <ArrowLeft size={16} />
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
      {/* <TextWrapper
        text={news_item_data.content}
        fontFamily="dmSans"
        html
        styleType="body"
        className="text-black"
      /> */}
      <DomPurifyWrapper
        fontFamily="dmSans"
        styleType="body"
        className="text-black"
        content={news_item_data.content}
      />
      <MediaSwiper media={news_item_data.mediaContent} />
      <ShareButtons title={news_item_data.title} />
    </SectionContainer>
  );
};

export default Page;
