import CenterTitle from "@/lib/components/Common/CenterTitle";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { WarehousingDataType } from "@/lib/types/services";
import Image from "next/image";

type LocationsProps = {
  data: WarehousingDataType;
};

const Locations = ({ data }: LocationsProps) => {
  console.log(data);
  return (
    <SectionContainer
      className=""
      parentClassName="bg-gray-100 overflow-hidden relative"
    >
      {/* Map Section */}
      <div className="relative lg:absolute lg:-top-110 lg:right-0 xl:-top-100 xl:right-70">
        <div className="relative">
          <Image
            src="/svgs/map.svg"
            alt="locations"
            width={700}
            height={500}
            className="object-cover w-full h-auto"
          />
          <div className="absolute bottom-30 left-30 w-80">
            <div className="flex flex-row gap-4 bg-white shadow-lg rounded-4xl p-5">
              <div className="relative">
                <Image
                  src="/svgs/quotes.svg"
                  alt="locations"
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <TextWrapper
                  text={data.description}
                  fontFamily="dmSans"
                  styleType="body"
                />
                <TextWrapper
                  text={data.quote}
                  fontFamily="dmSans"
                  styleType="link"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-10">
        <CenterTitle
          title={data.title}
          subtitle={""}
          listItems={data.data}
          titleColor="text-gold"
          placement="left"
          description={""}
        />
      </div>
    </SectionContainer>
  );
};
export default Locations;
