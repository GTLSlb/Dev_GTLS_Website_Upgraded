import CenterTitle from "@/lib/components/Common/CenterTitle";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { IntegratedSolutionsProps } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/lib/ui/card";
import Image from "next/image";

const IntegratedSolutions = ({ items }: IntegratedSolutionsProps) => {
  return (
    <SectionContainer parentClassName="bg-gold">
      <CenterTitle
        title="3PL / 4PL Integrated Solutions"
        dark    
        description="Whether you're outsourcing part of your supply chain (3PL) or the full network (4PL), we offer flexible models to manage and optimise your logistics operations."
        buttonText={"Get a Custom Solution"}
        titleColor="text-white"
      />
      <div className="grid gird-cols-1 md:grid-cols-3  gap-10">
        {items?.map((item, index) => (
          <Card key={index} className="rounded-4xl p-5 pb-20">
            <CardHeader className="relative h-60 rounded-t-3xl overflow-hidden">
              <Image src={item?.picture} alt={item.title} fill className="object-cover" />
            </CardHeader>
            <CardContent className="flex flex-col gap-3 items-center justify-center text-center">
              <TextWrapper text={item.title} fontFamily="dmSans" styleType="subtitle" />
              <TextWrapper text={item.description} fontFamily="dmSans" styleType="body" />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default IntegratedSolutions;
