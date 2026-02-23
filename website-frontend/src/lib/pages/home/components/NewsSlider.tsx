"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import NewsCard from "@/lib/components/Common/NewsCard";
import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper";
import { RecentNewsDataType } from "@/lib/types/news";
import { StrapiLink } from "@/lib/services/media";

const NewsSlider: React.FC<{ news: RecentNewsDataType[] }> = ({ news }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="relative w-full">
      {/* Header with custom arrows */}

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {news.map((item, index) => (
          <SwiperSlide key={index} className="py-5 px-1">
            <NewsCard
              title={item.title}
              category=""
              description={item.description}
              newsDate={item.newsDate}
              documentId={item.documentId}
              imageSrc={StrapiLink(item.coverImg.url)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mb-0 gap-2">
        <button
          type="button"
          onClick={() => swiperRef?.current?.slidePrev()}
          aria-label="Previous slide" // A11y fix
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <MoveLeft className="w-4 h-4 text-gold" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => swiperRef?.current?.slideNext()}
          aria-label="Next slide" // A11y fix
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <MoveRight className="w-4 h-4 text-gold" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;
