import TextWrapper from "@/lib/components/Common/TextWrapper";
import { RecentNewsCardProps } from "@/lib/types/news";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({
  title,
  date,
  description,
  image,
  href,
}: RecentNewsCardProps) {
  return (
    <div className=" bg-white">
      {/* Image */}
      <div className="relative overflow-hidden rounded-4xl rounded-bl-none w-full h-[400px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 pt-4 pb-8">
        <TextWrapper
          text={date}
          fontFamily="dmSans"
          styleType="bodySmall"
          className="text-gold"
        />

        <TextWrapper
          text={title}
          fontFamily="funnel"
          styleType="title3"
          className=""
        />

        <TextWrapper
          text={description}
          fontFamily="dmSans"
          styleType="body"
          className="text-gray-600"
        />

        <Link
          href={href}
          className="text-gold font-semibold text-xs hover:underline inline-flex items-center gap-1"
        >
          Read More <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
