"use client";

import { StrapiLink } from "@/lib/services/media";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { StrapiMediaFile } from "@/lib/types/media";

interface Props {
  media: StrapiMediaFile[];
}

const MediaSwiper = ({ media }: Props) => {
  if (!media || media.length === 0) return null;

  return (
    <div className="w-full rounded-4xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="w-full h-full"
      >
        {media.map((file) => {
          const isVideo = file.mime.startsWith("video");
          const url = StrapiLink(file.url);

          return (
            <SwiperSlide key={file.id}>
              <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px]">
                {/* Video */}
                {isVideo && (
                  <video
                    src={url}
                    controls
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Image */}
                {!isVideo && (
                  <Image
                    src={url}
                    alt={file.alternativeText || "Media"}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MediaSwiper;
