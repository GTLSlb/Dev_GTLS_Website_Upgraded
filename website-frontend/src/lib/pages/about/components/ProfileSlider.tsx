"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { MoveLeft, MoveRight } from "lucide-react";
import ProfileCard from "./ProfileCard";
import { Swiper as SwiperType } from 'swiper';
import { ProfileSliderProps } from "@/lib/types/profiles";
import { TeamMember } from "@/lib/types/content";

type OurTeamProps = {
  items: TeamMember[];
};

const ProfileSlider: React.FC<OurTeamProps> = ({items} : OurTeamProps) => {
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
        slidesPerView={3}
         loop={true}  // 👈 centers the active slide
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, centeredSlides: false },
          1024: { slidesPerView: 3, centeredSlides: true },
        }}
        className="profile-swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="py-5 px-1">
            <ProfileCard
              title={item.title}
              description={item.description}
              imageSrc={item.la}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileSlider;
