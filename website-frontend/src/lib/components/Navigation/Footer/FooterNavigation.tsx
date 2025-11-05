import Image from "next/image";
import Container from "../../Containers/container";
import { Input } from "@/lib/ui/input";
import { Button } from "@/lib/ui/button";
import TextWrapper from "../../Common/TextWrapper";
import { Facebook, Instagram, Phone } from "lucide-react";
import { footerMenu, locations } from "@/lib/data";
import SectionContainer from "../../Containers/sectionContainer";

const FooterNavigation = ({}) => {
  return (
    <div className="w-full bg-creamy py-15">
      <Container>
        <SectionContainer className="!pt-0 !pb-0">
          <div className="flex flex-col md:flex-row  gap-28">
            <div className="flex w-full md:w-5/12 flex-col gap-10">
              <Image
                src="/Logos/logo-transparent.svg"
                alt="MADs"
                width={100}
                height={50}
                priority
                fetchPriority="high"
              />
              <div className="flex items-center justify-between w-full gap-18">
                <Input
                  type="email"
                  className="rounded-full border border-black w-full"
                  placeholder="Email Address"
                />
                <Button
                  type="submit"
                  className="rounded-full bg-transparent border-black"
                  variant="outline"
                >
                  Subscribe
                </Button>
              </div>
              <TextWrapper
                text="Stay updated with our latest news, insights, and exclusive updates straight to your inbox."
                fontFamily="dmSans"
                styleType="bodySmall"
                className="text-tint-light-gray"
              />
              <div className="flex gap-10">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={20} />
                </a>

                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-10 w-full md:w-7/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 w-full">
                {footerMenu.map((section) => (
                  <div key={section.title} className="flex flex-col gap-4">
                    <TextWrapper
                      text={section.title}
                      fontFamily="dmSans"
                      styleType="title3"
                      className="text-gold"
                    />
                    <ul className="flex flex-col gap-2 text-tint-black">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <a href={item.link} className="hover:underline">
                            <TextWrapper
                              text={item.label}
                              fontFamily="dmSans"
                              styleType="linkSmall"
                              className="text-tint-black"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className=" flex flex-col gap-2 text-tint-gray">
                <TextWrapper
                  text="Locations"
                  fontFamily="dmSans"
                  styleType="title3"
                  className="text-gold"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
                  {locations.map((section) => (
                    <div key={section.city} className="flex flex-col gap-4">
                      <TextWrapper
                        text={section.city}
                        fontFamily="dmSans"
                        styleType="subtitle"
                        className="text-tint-black"
                      />
                      <div className="flex  flex-col">
                        <TextWrapper
                          text={`${section.street}, ${section.suburb}`}
                          fontFamily="dmSans"
                          styleType="bodySmall"
                          className="text-tint-light-gray !text-[12px]"
                        />
                        <TextWrapper
                          text={`${section.state}, ${section.postalCode}`}
                          fontFamily="dmSans"
                          styleType="bodySmall"
                          className="text-tint-light-gray !text-[12px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-end mt-15">
              <TextWrapper
                text="© 2024 GTLS. All rights reserved."
                fontFamily="dmSans"
                styleType="bodySmall"
                className="text-tint-light-gray"
              />
            </div>
          </div>
        </SectionContainer>
      </Container>
    </div>
  );
};
export default FooterNavigation;
