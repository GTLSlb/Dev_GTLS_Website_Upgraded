"use client";

import "dotenv/config";
import React, { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import { pca } from "@/lib/utils/helper";

import { AuthContext } from "@/lib/context/auth_context";
import { AUTH_ENDPOINTS } from "@/lib/api/endpoints";
import { backendUrl } from "@/lib/api/endpoints";
import AnimatedLoading from "@/lib/components/Loader/DotsLoader";
import { deleteCookie } from "cookies-next/client";

const ClientLogoutPage = dynamic(
  () => import("gtls-npm-libraries").then((mod) => mod.LogoutPage),
  {
    ssr: false,

    loading: () => <div className="text-xl"><AnimatedLoading /></div>,
  }
);

export default function Logout() {
  const { setToken, setUser, user } = useContext(AuthContext);

  const gtamURl = process.env.NEXT_PUBLIC_APP_GTAM_API_URL || "";
  const appDomain = process.env.NEXT_PUBLIC_APP_SESSION_DOMAIN || "";
  const appURL = process.env.NEXT_PUBLIC_APP_APP_URL || "";

  useEffect(() => {
    // Delete jwt token from cookies
    deleteCookie("jwt_token", { path: "/", domain: appDomain });
  },[])

  return (
    <ClientLogoutPage
      pca={pca}
      appUrl={appURL}
      appDomain={appDomain}
      user={user}
      gtamUrl={gtamURl}
      logoutUrl={backendUrl + AUTH_ENDPOINTS.logout}
      setUser={setUser}
      setToken={setToken}
    />
  );
}
