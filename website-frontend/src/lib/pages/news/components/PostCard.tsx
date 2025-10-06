"use client";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import { RecentPostsCardProps } from "@/lib/types";
import { Button } from "@/lib/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function PostCard({
  title,
  date,
  description,
  image,
  href,
}: RecentPostsCardProps) {
  const encodedHref = encodeURIComponent(href);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedHref}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedHref}`,
  };

  const handleShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-row gap-4 bg-white">
      {/* Image */}
      <div className="relative overflow-hidden w-1/3 h-[150px] rounded-4xl ">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-0 h-[150px]  w-2/3 ">
        <TextWrapper
          text={title}
          fontFamily="funnel"
          styleType="title4"
          className=""
        />
        <TextWrapper
          text={date}
          fontFamily="dmSans"
          styleType="bodySmall"
          className="text-gold"
        />
        <TextWrapper
          text={description}
          fontFamily="dmSans"
          styleType="bodySmall"
          className="text-gray-600 line-clamp-2"
        />
        <div className="flex flex-row items-center gap-0">
          <a href={href}>
            <TextWrapper
              text="Share:"
              fontFamily="dmSans"
              styleType="linkSmall"
              className="text-gold"
            />
          </a>
          <Button className="hover:cursor-pointer" variant={"ghost"} onClick={() => handleShare(shareLinks.facebook)}>
            <Facebook className="text-gold size-4" />
          </Button>

          <Button className="hover:cursor-pointer" variant={"ghost"} onClick={() => handleShare(shareLinks.linkedin)}>
            <Linkedin className="text-gold size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
