"use client";

import "dotenv/config";
import React, { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import { pca } from "@/lib/utils/helper";

import { AuthContext } from "@/lib/context/auth_context";
import { AUTH_ENDPOINTS } from "@/lib/api/endpoints";
import { backendUrl } from "@/lib/api/endpoints";
import AnimatedLoading from "@/lib/components/Loader/AnimatedLoading";
import { jwtDecode } from "jwt-decode";
import { deleteCookie, getCookie } from "cookies-next";
import { JWT_Payload, User } from "@/lib/types/auth/auth";

const ClientLogoutPage = dynamic(
  () => import("gtls-npm-libraries").then((mod) => mod.LogoutPage),
  {
    ssr: false,

    loading: () => (
      <div className="h-full w-full"><AnimatedLoading /></div>
    ),
  }
);

export default function Logout() {
  const { setToken, setUser, user } = useContext(AuthContext);

  const gtamURl = process.env.NEXT_PUBLIC_APP_GTAM_API_URL || "";
  const appDomain = process.env.NEXT_PUBLIC_APP_SESSION_DOMAIN || "";
  const appURL = process.env.NEXT_PUBLIC_APP_APP_URL || "";

  const [isLoading, setIsLoading] = React.useState(true);
  const [decoded_user_info, setDecoded_user_info] = React.useState<User | null>(
    null
  );

  useEffect(() => {
    const fetchUser = async () => {
      const jwtToken = await getCookie("jwt_token");
      if (jwtToken) {
        const decoded_info: JWT_Payload = jwtDecode(jwtToken);
        setDecoded_user_info(decoded_info.user);
      }else{
        setDecoded_user_info(user);
      }
      // Delete jwt token from cookies
      deleteCookie("jwt_token", { path: "/", domain: appDomain });
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (decoded_user_info) {
      setIsLoading(false);
    }
  }, [decoded_user_info]);

  if(isLoading){
    return <div className="h-full w-full"><AnimatedLoading /></div>
  }else{
    return (
    <ClientLogoutPage
      pca={pca}
      appUrl={appURL}
      appDomain={appDomain}
      user={decoded_user_info}
      gtamUrl={gtamURl}
      logoutUrl={backendUrl + AUTH_ENDPOINTS.logout}
      setUser={setUser}
      setToken={setToken}
    />
  );
  }
  
}
