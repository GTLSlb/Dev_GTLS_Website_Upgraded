import { Card, CardDescription, CardTitle } from "@/lib/ui/card";
import Image from "next/image";
import { ProfileCardProps } from "@/lib/types";
import TextWrapper from "@/lib/components/Common/TextWrapper";

const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <Card className="p-5 pb-15 rounded-3xl">
      <div className="relative h-64 w-full rounded-t-2xl overflow-hidden">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="text-center flex flex-col gap-4">
        <CardTitle>
          <TextWrapper text={title} fontFamily="dmSans" styleType="title4" />
        </CardTitle>
        <CardDescription>
          <TextWrapper
            text={description}
            fontFamily="dmSans"
            styleType="bodySmall"
          />
        </CardDescription>
      </div>
    </Card>
  );
};

export default ProfileCard;
