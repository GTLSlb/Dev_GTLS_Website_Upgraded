import { UnevenGridProps, WhyGtlsItem } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/lib/ui/card";
import Image from "next/image";
import TextWrapper from "./TextWrapper";

const UnevenGrid = ({ items }: UnevenGridProps) => {
  const cols = 4;
  const rowSpan = 2;

  return (
    <div>
      {/* Use auto rows so you don't have to predict how many rows you'll need */}
      <div className="hidden lg:grid grid-cols-4 gap-10 auto-rows-min">
        {items?.map((item: WhyGtlsItem, index: number) => {
          const col = (index % cols) + 1;
          const block = Math.floor(index / cols);
          const isLeftCol = (col - 1) % 2 === 0; // columns 1 & 3
          const rowStart = (isLeftCol ? 1 : 2) + block * 2;

          return (
            <Card
              key={index}
              className="rounded-4xl p-5"
              style={{
                gridColumnStart: col,
                gridRowStart: rowStart,
                gridRowEnd: `span ${rowSpan}`,
              }}
            >
              <CardContent className="h-56 flex flex-col gap-10 items-center justify-center text-center">
                <div className="relative h-20 w-20 ">
                  <Image
                    src={process.env.NEXT_PUBLIC_STRAPI_URL ? process.env.NEXT_PUBLIC_STRAPI_URL + item?.icon.url : ''}
                    alt={item.title}
                    fill
                    className="rounded-2xl"
                  />
                </div>
                <TextWrapper
                  text={item.title}
                  fontFamily="dmSans"
                  styleType="subtitle"
                />
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* mobile / small screens unchanged */}
      <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-10">
        {items?.map((item, index) => (
          <Card key={index} className="rounded-4xl">
            <CardHeader className="relative h-44">
              <div className="relative h-20 w-20 ">
                <Image
                  src={process.env.NEXT_PUBLIC_STRAPI_URL ? process.env.NEXT_PUBLIC_STRAPI_URL + item?.icon.url : ''}
                  alt={item.title}
                  fill
                  className="rounded-2xl"
                />
              </div>
            </CardHeader>
            <CardContent className="h-10 flex items-center justify-center text-center">
              <TextWrapper
                text={item.title}
                fontFamily="dmSans"
                styleType="subtitle"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UnevenGrid;
