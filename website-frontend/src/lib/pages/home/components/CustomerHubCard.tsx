import React from "react";
import IconList from "@/lib/components/Common/IconList";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import { Card, CardContent, CardHeader } from "@/lib/ui/card";
import { CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { CustomerHubCardProps } from "@/lib/types";

const CustomerHubCard: React.FC<CustomerHubCardProps> = ({
  title,
  subtitle,
  img,
  CustomerHubList = [],
  iconColor = "text-gold",
  children,
}) => {
  return (
    <Card className="px-5">
      <CardHeader>
        <div className="flex flex-row justify-between gap-2 w-full h-full ">
          <div className="flex gap-4 md:gap-10">
            <div className="relative h-12 w-12">
              <Image
                src={img?.url ? process.env.NEXT_PUBLIC_STRAPI_URL+img?.url : ''}
                alt={title}
                fill
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-0">
              <TextWrapper
                text={title}
                fontFamily="dmSans"
                styleType="title4"
                className="text-gold"
              />
              <TextWrapper
                text={subtitle}
                fontFamily="dmSans"
                styleType="bodySmall"
              />
            </div>
          </div>
          <div>
            <CircleArrowOutUpRight className={iconColor} />
          </div>
        </div>
      </CardHeader>

      {(CustomerHubList.length > 0 || children) && (
        <CardContent className="relative">
          {CustomerHubList.length > 0 && <IconList items={CustomerHubList} />}
          {children}
        </CardContent>
      )}
    </Card>
  );
};

export default CustomerHubCard;
