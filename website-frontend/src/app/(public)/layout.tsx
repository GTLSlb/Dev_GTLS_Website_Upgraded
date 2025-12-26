import React, { Suspense } from "react";
import HeaderNavigation from "@/lib/components/Navigation/Header/HeaderNavigation";
import FooterNavigation from "@/lib/components/Navigation/Footer/FooterNavigation";
import { FooterPageData } from "@/lib/types/navigation";
import { getFooterData, getNavbarData } from "@/lib/services/api";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const footerData: FooterPageData = await getFooterData();
  const navbarData = await getNavbarData();

  // Extract the main component content
  const footerContent = footerData?.Footer;
  return (
    <>
      <Suspense fallback={<div></div>}>
        <HeaderNavigation navbarData={navbarData} />
      </Suspense>
      {children}
      {/* Right Side Vertical Banner */}
      <Link
        href="/contactus"
        className="
    hidden md:flex 
    fixed right-0 top-3/4 -translate-y-1/2
    bg-gold text-white 
    px-3 py-2 
    rounded-l-lg 
    cursor-pointer 
    shadow-md shadow-black/30
    transition-transform duration-300
    border border-white border-r-0
    hover:scale-110
  "
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Contact Us
      </Link>
      <FooterNavigation footerContent={footerContent} />
    </>
  );
};

export default Layout;
