import React, { Suspense } from "react";
import HeaderNavigation from "@/lib/components/Navigation/Header/HeaderNavigation";
import FooterNavigation from "@/lib/components/Navigation/Footer/HeaderNavigation";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <HeaderNavigation />
      </Suspense>
      {children}
      <FooterNavigation />
    </>
  );
};

export default Layout;
