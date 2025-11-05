import SectionContainer from "@/lib/components/Containers/sectionContainer";
import ContactForm from "../components/ContactForm";
import Branches from "../components/Branches";
import { branchesData } from "@/lib/data";
import Image from "next/image";
import TextWrapper from "@/lib/components/Common/TextWrapper";

const ContactUs = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row w-full gap-20">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="relative w-full h-96 rounded-4xl overflow-hidden">
            <Image
              src="/webp/contactus.webp"
              alt="Contact Us"
              fill
              className="object-cover"
            />
            <div className="absolute top-0 left-0 rounded-br-4xl p-4  w-1/2 h-24 bg-gold">
              <div className="flex items-center justify-center w-full flex-col gap-0">
                <TextWrapper
                  text="Get in touch"
                  fontFamily="funnel"
                  styleType="title3"
                  className="text-tint-black"
                />
                <TextWrapper
                  text="For More Information"
                  fontFamily="dmSans"
                  styleType="bodySmall"
                  className="text-white"
                />
              </div>
            </div>
          </div>
          <Branches data={branchesData} />
        </div>
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactUs;
