import { UnevenGridProps, WhyGtlsItem } from "@/lib/types";
import { Card, CardContent } from "@/lib/ui/card";
import Image from "next/image";
import TextWrapper from "./TextWrapper";

const UnevenGrid = ({ items }: UnevenGridProps) => {
  return (
    <div>
      {/* Use auto rows so you don't have to predict how many rows you'll need */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-min">
        {items?.map((item: WhyGtlsItem, index: number) => {
          return (
            <Card key={index} className="rounded-4xl p-5">
              <CardContent className="h-56 flex flex-col gap-5 items-center justify-center text-center">
                <div className="relative h-20 w-20 ">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_URL
                        ? process.env.NEXT_PUBLIC_STRAPI_URL + item?.icon.url
                        : ""
                    }
                    alt={item.title}
                    placeholder="blur"
                    blurDataURL="/Logos/logo-transparent.svg"
                    fill
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <TextWrapper
                    text={item.title}
                    fontFamily="dmSans"
                    styleType="subtitle"
                  />
                  <TextWrapper
                    text={item.description ?? ""}
                    fontFamily="dmSans"
                    styleType="bodySmall"
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* mobile / small screens unchanged */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items?.map((item, index) => (
          <Card key={index} className="rounded-4xl">
            <CardHeader className="relative h-44">
              <div className="relative h-20 w-20 ">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_URL
                      ? process.env.NEXT_PUBLIC_STRAPI_URL + item?.icon.url
                      : ""
                  }
                  alt={item.title}
                  fill
                  className="rounded-2xl"
                />
              </div>
            </CardHeader>
            <CardContent className="h-10 flex items-center justify-center text-center">
              <div className="flex flex-col gap-3">
                  <TextWrapper
                    text={item.title}
                    fontFamily="dmSans"
                    styleType="subtitle"
                  />
                  <TextWrapper
                    text={item.description??""}
                    fontFamily="dmSans"
                    styleType="bodySmall"
                  />
                </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </div>
  );
};

export default UnevenGrid;
