"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import NewsCard from "@/lib/components/Common/NewsCard";
import { MoveLeft, MoveRight } from "lucide-react";
import { NewsSliderProps } from "@/lib/types";
import { Swiper as SwiperType } from 'swiper';

const NewsSlider: React.FC<NewsSliderProps> = ({ news }) => {
  const swiperRef = useRef<SwiperType|null>(null);
  return (
    <div className="relative w-full">
      {/* Header with custom arrows */}
      <div className="flex justify-end mb-0 gap-2">
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
              description={item.description}
              imageSrc={item.imageSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
