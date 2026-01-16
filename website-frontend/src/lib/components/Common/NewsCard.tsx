import { Card, CardDescription, CardTitle } from "@/lib/ui/card";
import Image from "next/image";
import TextWrapper from "./TextWrapper";
import { NewsCardProps } from "@/lib/types/cards";
import Link from "next/link";

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  documentId,
  imageSrc,
  newsDate,
}) => {
  return (
    <Link href={`/all-news/${documentId}`} className="w-full">
      <Card className="p-5 pb-5 rounded-3xl min-h-[450px] h-[500px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col gap-6">
        <div className="relative min-h-64 w-full rounded-t-2xl rounded-br-2xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            placeholder="blur"
            blurDataURL="/Logos/logo-transparent.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className=" flex flex-col gap-4">
          <TextWrapper className="text-gold" isDate={true} text={newsDate || ""} fontFamily="dmSans" styleType="body" />
          <CardTitle>
            <TextWrapper text={title} fontFamily="dmSans" styleType="title4" />
          </CardTitle>
          <CardDescription>
            <TextWrapper
              text={description}
              fontFamily="dmSans"
              styleType="bodySmall"
              className="line-clamp-3"
            />
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
};

export default NewsCard;
