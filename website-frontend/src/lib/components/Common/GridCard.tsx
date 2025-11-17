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

// Destructure the props you need: title, description, content, and footer.
// The `footer` prop is a good place to pass in a button or link.
const GridCard: React.FC<GridCardProps> = ({ title, content ,icon}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-light-gold/10 border-0 shadow-none">
      <CardHeader>
        <Image
          src={process.env.NEXT_PUBLIC_STRAPI_URL+icon.url}
          alt="MADs"
          width={80}
          height={80}
          priority
          fetchPriority="high"
          className="mt-6 mb-10"
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
      <CardFooter>
        {/* <p>{footer}</p> */}
      </CardFooter>
    </Card>
  );
};

export default GridCard;