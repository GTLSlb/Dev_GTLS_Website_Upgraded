import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { Quote } from "lucide-react";
import Image from "next/image";

const MessageBanner = () => {
  return (
    <SectionContainer className="relative overflow-hidden">
      <Image
        src="/svgs/reverseTiger.svg"
        alt="Director"
        width={500}
        height={300}
        className="object-cover absolute -bottom-28 -right-28 xl:-bottom-15 xl:-right-21"
      />
      <div className="bg-gold rounded-t-4xl flex gap-10 flex-col  rounded-br-4xl p-15 py-20">
        <div className="flex flex-col md:flex-row gap-15">
          <div className="relative w-full h-96 rounded-4xl md:w-1/3 overflow-hidden">
            <Image
              src="/webp/imad.webp"
              alt="Director"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col w-full md:w-2/3 gap-7">
            <TextWrapper
              text="Message from the Director"
              fontFamily="funnel"
              styleType="title1"
              className="text-white"
            />
            <div className="relative w-18 h-14">
                <Image
                  src="/svgs/quotes.svg"
                  alt="Director"
                  fill
                  className=""
                />
            </div>
            {/* <Quote className="text-white" size={60} /> */}
            <TextWrapper
              text="At Gold Tiger Logistics Solutions, our mission has always been simple: to provide reliable, efficient, and innovative logistics solutions that our clients can depend on. Over the years, we have grown from a single truck operation into a fully integrated logistics company, delivering freight, warehousing, and supply chain services across Australia. Our success is built on the dedication of our people, the strength of our fleet, and our commitment to leveraging technology to create smarter, more transparent logistics solutions. Every decision we make is guided by a focus on safety, operational excellence, and customer satisfaction. We understand that logistics is more than moving goods it’s about building lasting partnerships, solving challenges proactively, and supporting the growth of our clients’ businesses. At Gold Tiger, we take pride in being more than a service provider; we are a trusted partner in every journey. Thank you for choosing Gold Tiger. We look forward to driving your business forward safely, efficiently, and reliably."
              fontFamily="dmSans"
              styleType="body"
              className="text-white"
            />
            <div className="flex flex-col">
              <TextWrapper
                text="Imad El Masri"
                fontFamily="dmSans"
                styleType="title4"
                className="text-white"
              />
              <TextWrapper
                text="Director, Gold Tiger Logistics Solutions"
                fontFamily="dmSans"
                styleType="body"
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default MessageBanner;
