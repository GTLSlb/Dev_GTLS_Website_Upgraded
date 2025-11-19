"use client";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import { RecentPostsCardProps } from "@/lib/types";
import { Button } from "@/lib/ui/button";
import { Share } from "lucide-react";
import Image from "next/image";

export default function PostCard({
  title,
  date,
  description,
  image,
  href,
}: RecentPostsCardProps) {

const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this post!",
          text: "Thought you might find this LinkedIn post interesting:",
          url: href,
        });
      } catch (error) {
        console.error("Share cancelled or failed:", error);
      }
    } else {
      // Fallback for unsupported browsers
      alert("Sharing is not supported in this browser. Please copy the link manually.");
    }
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
          <Button className="hover:cursor-pointer" variant={"ghost"} onClick={handleShare}>
            <Share className="text-gold size-4" /> <TextWrapper
              text="Share"
              fontFamily="dmSans"
              styleType="linkSmall"
              className="text-gold"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
