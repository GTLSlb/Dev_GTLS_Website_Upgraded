"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import NewsCard from "@/lib/components/Common/NewsCard";
import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper";
import { RecentNewsDataType } from "@/lib/types/news";

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
              title={item.name}
              description={item.position}
              imageSrc={process.env.NEXT_PUBLIC_STRAPI_URL+item.img.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mb-0 gap-2">
        <button
          onClick={() => swiperRef?.current?.slidePrev()}
          className="p-2 rounded-full  border-gray-300 hover:bg-gray-100 transition"
        >
          <MoveLeft className="w-4 h-4 text-gold" />
        </button>
        <button
          onClick={() => swiperRef?.current?.slideNext()}
          className="p-2 rounded-full  border-gray-300 hover:bg-gray-100 transition"
        >
          <MoveRight className="w-4 h-4 text-gold" />
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;
