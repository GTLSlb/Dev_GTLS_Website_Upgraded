import CenterTitle from "@/lib/components/Common/CenterTitle";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { FacilitiesProps } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/lib/ui/card";
import Image from "next/image";

const Facilities = ({ items,title, description, buttonText }: FacilitiesProps) => {
  return (
    <SectionContainer className="" parentClassName="bg-gold">
      <div className="flex flex-col gap-10">
        <CenterTitle
          title={title}
          titleColor="text-white"
          buttonText={buttonText}
          dark
          buttonVariant={"outline"}
          description={description}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {items?.map((item, index) => (
            <Card key={index} className="rounded-4xl">
              <CardContent className="h-56 flex flex-col gap-10 items-center justify-center text-center">
                <div className="relative h-20 w-20 ">
                  <Image
                    src={item?.picture}
                    alt={item.title}
                    fill
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <TextWrapper
                    text={item.title}
                    fontFamily="dmSans"
                    styleType="subtitle"
                  />
                  <TextWrapper
                    text={item.description}
                    fontFamily="dmSans"
                    styleType="body"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
export default Facilities;
