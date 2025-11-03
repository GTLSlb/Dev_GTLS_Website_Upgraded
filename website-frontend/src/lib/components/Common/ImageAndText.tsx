"use client";

import Image from "next/image";
import TextWrapper from "@/lib/components/Common/TextWrapper";

export interface ImageAndTextProps {
  /** Section title */
  title: string;
  /** Description text */
  description: string;
  /** Image source */
  imgSrc: string;
  /** If true, places image first (left on desktop) */
  imageFirst?: boolean;
  /** Optional additional styling */
  className?: string;
}

export default function ImageAndText({
  title,
  description,
  imgSrc,
  imageFirst = true,
  className = "",
}: ImageAndTextProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 items-center gap-16 ${className}`}>
      {/* Image */}
      <div
        className={`w-full h-[400px] overflow-hidden rounded-3xl relative ${
          imageFirst ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text */}
      <div
        className={`w-full flex flex-col gap-4 ${
          imageFirst ? "md:order-2" : "md:order-1"
        }`}
      >
        <TextWrapper
          text={title}
          fontFamily="funnel"
          styleType="title2"
          className="text-gold"
        />
        <TextWrapper
          text={description}
          fontFamily="dmSans"
          styleType="body"
        />
      </div>
    </div>
  );
}
