import CenterTitle from "@/lib/components/Common/CenterTitle";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import { NewsLetterType } from "@/lib/types/news";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Mail } from "lucide-react";

const Newsletter = ({title,buttonText,description}:NewsLetterType) => {
  return (
    <div className="flex border border-color-[#6e6f7a] rounded-3xl px-6 pb-6 flex-col gap-4">
      <CenterTitle title={title} placement="left" titleColor="text-gold" />
      <div className="flex flex-col gap-10">
        <TextWrapper
          text={description}
          fontFamily="dmSans"
          styleType="body"
          className=""
        />
        <Input
          type="email"
          placeholder="Email"
          className="bg-creamy rounded-full"
          icon={<Mail className="text-dark-gold size-4" />}
        />
        <Button variant={"default"} className="rounded-full h-11">
          <TextWrapper
          text={buttonText}
          fontFamily="dmSans"
          styleType="body"
          className=""
        />
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
