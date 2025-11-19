import TextWrapper from "@/lib/components/Common/TextWrapper";
import { BranchesProps } from "@/lib/types";
import { Phone, MapPin, Mail } from "lucide-react";

const Branches = ({ data }: BranchesProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {data.map((branch, index) => (
        <div key={index} className="flex flex-col gap-4">
          <TextWrapper
            text={branch.name}
            fontFamily="funnel"
            styleType="title2"
            className="text-gold"
          />

          <div className="flex items-center gap-2 text-sm">
            <Phone className="text-dark-gold" size={18} />
            <TextWrapper
              text={branch.phone}
              fontFamily="dmSans"
              styleType="link"
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <MapPin className="text-dark-gold" size={24} />
            <TextWrapper
              text={branch.address}
              fontFamily="dmSans"
              styleType="link"
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Mail className="text-dark-gold" size={18} />
            <TextWrapper
              text={branch.mail}
              fontFamily="dmSans"
              styleType="link"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Branches;
