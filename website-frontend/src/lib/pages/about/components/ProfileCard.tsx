import { Card, CardDescription, CardTitle } from "@/lib/ui/card";
import Image from "next/image";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import { ProfileCardProps } from "@/lib/types/cards";

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  position,
  imageSrc,
}) => {
  return (
    <Card className="p-5 pb-15 rounded-3xl profile-card">
      <div className="relative h-64 w-full rounded-t-2xl overflow-hidden">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>
      <div className="text-center flex flex-col gap-4">
        <CardTitle>
          <TextWrapper text={name} fontFamily="dmSans" styleType="title4" className="goldtext" />
        </CardTitle>
        <CardDescription>
          <TextWrapper
            text={position}
            fontFamily="dmSans"
            styleType="bodySmall"
          />
        </CardDescription>
      </div>
    </Card>
  );
};

export default ProfileCard;
