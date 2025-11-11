import React, { Suspense } from "react";
import HeaderNavigation from "@/lib/components/Navigation/Header/HeaderNavigation";
import FooterNavigation from "@/lib/components/Navigation/Footer/FooterNavigation";
import { FooterPageData } from "@/lib/types/navigation";
import { getFooterData } from "@/lib/services/api";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const footerData: FooterPageData | null = await getFooterData();

  // Extract the main component content
  const footerContent = footerData?.Footer;
  return (
    <>
      <Suspense fallback={<div></div>}>
        <HeaderNavigation />
      </Suspense>
      {children}
      <FooterNavigation footerContent={footerContent} />
    </>
  );
};

export default Layout;
