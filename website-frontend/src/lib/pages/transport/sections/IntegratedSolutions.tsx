import CenterTitle from "@/lib/components/Common/CenterTitle";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { StrapiLink } from "@/lib/services/media";
import { IntegratedSolutionsType } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/lib/ui/card";
import Image from "next/image";

type IntegratedSolutionsProps = {
  data: IntegratedSolutionsType;
};

const IntegratedSolutions: React.FC<IntegratedSolutionsProps> = ({ data }) => {
  const sectionCard = data.SolutionsCards;
  const items = sectionCard.CustomerHubCard;
  return (
    <SectionContainer parentClassName="bg-gold">
      <CenterTitle
        title={sectionCard.title}
        dark
        description={sectionCard.description}
        buttonText={sectionCard.buttonText}
        titleColor="text-white"
      />
      <div className="grid gird-cols-1 md:grid-cols-3  gap-10">
        {items?.map((item, index: number) => (
          <Card key={index} className="rounded-4xl p-5 pb-20">
            <CardHeader className="relative h-60 rounded-t-3xl overflow-hidden">
              <Image
                src={StrapiLink(item.img.url)}
                placeholder="blur"
                blurDataURL="/Logos/logo-transparent.svg"
                alt={item.title}
                fill
                className="object-cover"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-3 px-0 items-center justify-center text-center">
              <TextWrapper
                text={item.title}
                fontFamily="dmSans"
                styleType="subtitle"
              />
              <TextWrapper
                text={item.subtitle}
                fontFamily="dmSans"
                styleType="body"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default IntegratedSolutions;
