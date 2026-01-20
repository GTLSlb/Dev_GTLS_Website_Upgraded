import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/ui/card";
import Image from "next/image";
import TextWrapper from "./TextWrapper";
import { GridCardProps } from "@/lib/types/cards";
import { StrapiLink } from "@/lib/services/media";

// Destructure the props you need: title, description, content, and footer.
// The `footer` prop is a good place to pass in a button or link.
const GridCard: React.FC<GridCardProps> = ({ title, content, icon }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-light-gold/10 border-0 shadow-none">
      <CardHeader>
        <Image
          src={StrapiLink(icon.url)}
          alt={icon.alternativeText || title}
          width={80}
          placeholder="blur"
          blurDataURL="/Logos/logo-transparent.svg"
          height={80}
          priority
          fetchPriority="high"
          className="mt-2 mb-5 sm:mt-6 sm:mb-10"
        />
        <CardTitle className="text-gold">
          <TextWrapper text={title} fontFamily="dmSans" styleType="subtitle" />
        </CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
        {/* Pass the CardAction as a prop. This makes the component more flexible. */}
        {/* <CardAction>{footer}</CardAction> */}
      </CardHeader>
      <CardContent>
        {/* Render the content prop. You can use children here as well. */}
        <TextWrapper text={content} fontFamily="dmSans" styleType="bodySmall" />
      </CardContent>
      <CardFooter>{/* <p>{footer}</p> */}</CardFooter>
    </Card>
  );
};

export default GridCard;
