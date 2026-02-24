"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { MoveLeft, MoveRight } from "lucide-react";
import ProfileCard from "./ProfileCard";
import { Swiper as SwiperType } from 'swiper';
import { TeamMember } from "@/lib/types/content";
import { StrapiLink } from "@/lib/services/media";

type OurTeamProps = {
  items: TeamMember[];
};

const ProfileSlider: React.FC<OurTeamProps> = ({ items }: OurTeamProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex items-center gap-4 w-full">
      {/* Left Arrow */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="flex-shrink-0 w-10 h-10 flex items-center text-gold justify-center rounded-full border border-gray-200 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
      >
        <MoveLeft className="w-5 h-5" />
      </button>

      {/* Swiper */}
      <div className="flex-1 min-w-0">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={false}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            340: { slidesPerView: 1 },
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: true },
          }}
          className="profile-swiper"
        >
          {items?.map((item, index) => (
            <SwiperSlide key={index} className="py-5 px-1">
              <ProfileCard
                name={item.name}
                position={item.position}
                imageSrc={StrapiLink(item.ImgSrc.url)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-gold rounded-full border border-gray-200 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
      >
        <MoveRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProfileSlider;