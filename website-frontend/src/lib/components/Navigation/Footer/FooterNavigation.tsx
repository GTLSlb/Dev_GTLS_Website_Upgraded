import Image from "next/image";
import Container from "../../Containers/container";
import { Input } from "@/lib/ui/input";
import { Button } from "@/lib/ui/button";
import TextWrapper from "../../Common/TextWrapper";
import { Facebook, Instagram, Phone } from "lucide-react";
import { footerMenu, locations } from "@/lib/data";
import SectionContainer from "../../Containers/sectionContainer";
import { FooterComponent } from "@/lib/types/navigation";

interface FooterProps {
    footerContent: any | null | undefined;
}

const fallbackMenu = [
    { title: "Company", items: [{ label: "About Us", link: "/about" }, { label: "Careers", link: "/careers" }] },
    { title: "Support", items: [{ label: "FAQ", link: "/faq" }, { label: "Contact", link: "/contact" }] },
    { title: "Legal", items: [{ label: "Privacy", link: "/privacy" }, { label: "Terms", link: "/terms" }] },
];
const fallbackLocations = [
    { city: "New York", street: "123 Broadway", suburb: "Manhattan", state: "NY", postalCode: "10001" },
    { city: "London", street: "45 Regent St", suburb: "West End", state: "", postalCode: "SW1A 1AA" },
];

const getStrapiImageURL = (url: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";
    // Handle case where Strapi is running on the same domain or path is already absolute
    if (url.startsWith('http') || baseUrl === "") return url;
    return `${baseUrl}${url}`;
};
const FooterNavigation = ({ footerContent }: FooterProps) => {
  console.log(footerContent)
    const { 
        logo, 
        description, 
        footerMenu, 
        Socials, 
        locations 
    } = footerContent;
    
    const socialItems = Socials.SocialMediaItem || [];
   const logoUrl = getStrapiImageURL(logo.url);
   const displayLocations = locations || fallbackLocations;
  return (
     <div className="w-full bg-gray-100 py-16">
            <Container>
                <SectionContainer className="!pt-0 !pb-0">
                    <div className="flex flex-col md:flex-row gap-20 lg:gap-28">
                        
                        {/* LEFT COLUMN: Logo, Newsletter, Socials */}
                        <div className="flex w-full md:w-5/12 flex-col gap-8">
                            {/* 1. Logo (Dynamic from Strapi, replaced next/image with <img>) */}
                            <img
                                src={logoUrl}
                                alt={logo.alternativeText || logo.name}
                                style={{ width: logo.width || 100, height: logo.height || 50 }}
                                className="object-contain"
                            />
                            
                            {/* Newsletter / Input (Replaced external components with native elements) */}
                            <div className="flex items-center w-full gap-4">
                                <input
                                    type="email"
                                    className="px-4 py-2 rounded-full border border-black w-full focus:ring-2 focus:ring-gold focus:outline-none"
                                    placeholder="Email Address"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 whitespace-nowrap rounded-full bg-transparent border-2 border-black hover:bg-black hover:text-white transition duration-200"
                                >
                                    Subscribe
                                </button>
                            </div>
                            
                            {/* 2. Description (Dynamic from Strapi) */}
                            <TextWrapper
                                text={description}
                                fontFamily="dmSans"
                                styleType="body"
                            />
                            
                            {/* 3. Social Media Links (Dynamic from Strapi, replaced lucide icons with <img>) */}
                            <div className="flex gap-6 mt-4">
                                {socialItems.map((item: any) => (
                                    <a
                                        key={item.id}
                                        href={item.link || "#"} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:text-gold transition duration-200"
                                    >
                                        <img
                                            src={getStrapiImageURL(item.Icon.url)}
                                            alt={item.Icon.alternativeText || item.Icon.name}
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
                                {footerMenu.map((section: any) => (
                                    <div key={section.title} className="flex flex-col gap-4">
                                        <TextWrapper
                                            text={section.title}
                                            fontFamily="dmSans"
                                            styleType="subtitle"
                                        />
                                        <ul className="flex flex-col gap-2 text-gray-800">
                                            {section.items.map((item: any) => (
                                                <li key={item.label}>
                                                    <a href={item.link} className="text-sm hover:underline text-gray-600">
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            
                            {/* 5. Locations (Using the locations data or fallback) */}
                            <div className=" flex flex-col gap-2 text-gray-500 mt-4">
                                <TextWrapper
                                    text="Locations"
                                    fontFamily="dmSans"
                                            styleType="subtitle" // Mocking text-gold style
                                />
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
                                    {displayLocations.map((section: any) => (
                                        <div key={section.city} className="flex flex-col gap-1">
                                            <TextWrapper
                                                text={section.city}
                                               fontFamily="dmSans"
                                            styleType="subtitle"
                                            />
                                            <div className="flex flex-col text-xs text-gray-500">
                                                <TextWrapper
                                                    text={`${section.street}, ${section.suburb}`}
                                                   fontFamily="dmSans"
                                            styleType="subtitle"
                                                />
                                                <TextWrapper
                                                    text={`${section.state}, ${section.postalCode}`}
                                                    fontFamily="dmSans"
                                            styleType="subtitle"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Copyright */}
                    <div className="w-full border-t border-gray-300 mt-12 pt-6">
                        <div className="flex justify-end">
                            <TextWrapper
                                text="© 2024 GTLS. All rights reserved."
                                fontFamily="dmSans"
                                            styleType="subtitle"
                            />
                        </div>
                    </div>
                </SectionContainer>
            </Container>
        </div>
  );
};
export default FooterNavigation;
