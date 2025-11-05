"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SliderProps } from "@/lib/types";
import CarouselCard from "./CarouselCard";
import { Swiper as SwiperType } from 'swiper';

const HistorySwiper: React.FC<SliderProps> = ({ items }) => {
  const swiperRef = useRef<SwiperType|null>(null);
  return (
    <div className="relative w-full">
      {/* Header with custom arrows */}
      <div className="flex justify-end mb-0 gap-2">
        <button
          onClick={() => swiperRef?.current?.slidePrev()}
          className="p-2 rounded-full hover:cursor-pointer border-gray-300 hover:bg-gray-100 transition"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
        </button>
        <button
          onClick={() => swiperRef?.current?.slideNext()}
          className="p-2 rounded-full hover:cursor-pointer border-gray-300 hover:bg-gray-100 transition"
        >
          <ArrowRight className="w-4 h-4 text-gold" />
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
        {items.map((item, index) => (
          <SwiperSlide key={index} className="py-5 px-1">
            <CarouselCard
              date={item.date}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HistorySwiper;
