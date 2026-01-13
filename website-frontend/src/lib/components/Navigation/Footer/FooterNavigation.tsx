import Container from "../../Containers/container";
import TextWrapper from "../../Common/TextWrapper";
import SectionContainer from "../../Containers/sectionContainer";
import { StrapiLink } from "@/lib/services/media";
import Image from "next/image";
import {
  FooterContent,
  FooterMenuItem,
  FooterSection,
  LocationItem,
  QuickLinkItem,
  SocialItem,
} from "@/lib/types/navigation";
import { Button } from "@/lib/ui/button";

interface FooterProps {
  footerContent: FooterContent;
}

const getStrapiImageURL = (url: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";
  // Handle case where Strapi is running on the same domain or path is already absolute
  if (url.startsWith("http") || baseUrl === "") return url;
  return `${baseUrl}${url}`;
};
const FooterNavigation = ({ footerContent }: FooterProps) => {
  const { logo, description, footerMenu, Socials } = footerContent;
  const footerMenuList = [
    {
      title: footerMenu.QuickLinks.title,
      items: footerMenu.QuickLinks.linkitems.map((i: QuickLinkItem) => ({
        label: i.label,
        link: i.link ?? "#",
        isDocument: false,
      })),
    },
    {
      title: footerMenu.OurServices.title,
      items: footerMenu.OurServices.serviceitems.map((i: QuickLinkItem) => ({
        label: i.label,
        link: i.link ?? "#",
        isDocument: false,
      })),
    },
    {
      title: footerMenu.Legal.title,
      items: footerMenu.Legal.legalitems.map((i: QuickLinkItem) => ({
        label: i.label,
        link: i.document ?? "#",
        isDocument: true,
      })),
    },
  ];
  const socialItems = Socials.SocialMediaItem || [];
  const logoUrl = getStrapiImageURL(logo.url);
  return (
    <div className="w-full bg-creamy py-16">
      <Container>
        <SectionContainer className="!pt-0 !pb-0">
          <div className="flex flex-col md:flex-row gap-20 lg:gap-28">
            {/* LEFT COLUMN: Logo, Newsletter, Socials */}
            <div className="flex w-full md:w-5/12 flex-col gap-8">
              {/* 1. Logo (Dynamic from Strapi, replaced next/image with <img>) */}
              <div className="relative">
                <Image
                  src={logoUrl}
                  placeholder="blur"
                  blurDataURL="/Logos/logo-transparent.svg"
                  alt={logo.alternativeText || logo.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* Newsletter / Input (Replaced external components with native elements) */}
              <div className="flex items-center w-full gap-4">
                <input
                  type="email"
                  className="px-4 py-2 rounded-full border border-black w-full focus:ring-2 focus:ring-gold focus:outline-none"
                  placeholder="Email Address"
                />
                <Button
                  className="rounded-full border border-black bg-transparent h-10.5 hover:bg-gold hover:text-white hover:cursor-pointer"
                  variant={"outline"}
                >
                  <TextWrapper
                    text="Subscribe"
                    fontFamily="dmSans"
                    styleType="subtitleSmall"
                  />
                </Button>
              </div>

              {/* 2. Description (Dynamic from Strapi) */}
              <TextWrapper
                text={description}
                fontFamily="dmSans"
                styleType="body"
              />

              {/* 3. Social Media Links (Dynamic from Strapi, replaced lucide icons with <img>) */}
              <div className="flex gap-6 mt-4">
                {socialItems.map((item: SocialItem) => (
                  <a
                    key={item.id}
                    href={item.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black relative hover:text-gold transition duration-200"
                  >
                    <Image
                      src={getStrapiImageURL(item.Icon.url)}
                      placeholder="blur"
                      blurDataURL="/Logos/logo-transparent.svg"
                      alt={
                        item.Icon.alternativeText ||
                        item.Icon.name ||
                        "Social Icon"
                      }
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Footer Menu & Locations */}
            <div className="flex flex-col gap-10 w-full md:w-7/12">
              {/* 4. Footer Menu (Dynamic from Strapi) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full">
                {footerMenuList.map((section: FooterSection) => (
                  <div key={section.title} className="flex flex-col gap-4">
                    <TextWrapper
                      text={section.title}
                      fontFamily="dmSans"
                      styleType="title4"
                      className="text-gold" // Mocking text-gold style
                    />
                    <ul className="flex flex-col gap-2 text-gray-800">
                      {section.items.map((item: FooterMenuItem) => (
                        <li key={item.label}>
                          <a
                            href={
                              item.isDocument
                                ? StrapiLink((item.link as { url: string }).url)
                                : (item.link as string)
                            }
                            className=" hover:underline "
                            target={item.isDocument ? "_blank" : undefined}
                            rel={
                              item.isDocument
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            <TextWrapper
                              text={item.label}
                              fontFamily="dmSans"
                              styleType="linkSmall"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* 5. Locations (Using the locations data or fallback) */}
              <div className=" flex flex-col gap-2  mt-4">
                <TextWrapper
                  text={footerMenu.Locations.title}
                  fontFamily="dmSans"
                  styleType="title4"
                  className="text-gold" // Mocking text-gold style
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
                  {footerMenu.Locations.LocationItem.map(
                    (section: LocationItem) => (
                      <div key={section.city} className="flex flex-col gap-1">
                        <TextWrapper
                          text={section.city}
                          fontFamily="dmSans"
                          styleType="linkSmall"
                        />
                        <div className="flex flex-col text-gray-500">
                          <TextWrapper
                            text={`${section.street}, ${section.suburb}`}
                            fontFamily="dmSans"
                            styleType="bodySmall"
                          />
                          <TextWrapper
                            text={`${section.state}, ${section.postalCode}`}
                            fontFamily="dmSans"
                            styleType="bodySmall"
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="w-full border-t border-gray-300 mt-12 pt-6">
            <div className="flex justify-end">
              <TextWrapper
                text="© 2026 GTLS. All rights reserved."
                fontFamily="dmSans"
                styleType="body"
                className="text-gray-500"
              />
            </div>
          </div>
        </SectionContainer>
      </Container>
    </div>
  );
};
export default FooterNavigation;
