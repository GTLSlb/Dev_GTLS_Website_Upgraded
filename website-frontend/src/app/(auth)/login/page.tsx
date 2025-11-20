"use client";

import "dotenv/config";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { clearMSALLocalStorage, pca } from "@/lib/utils/helper";
import { AUTH_ENDPOINTS } from "@/lib/api/endpoints";
import Logo from "@/lib/assets/images/Logo.png";
import Image from "next/image";
import AnimatedLoading from "@/lib/components/Loader/AnimatedLoading";
import axios from "axios";

const ClientLoginPage = dynamic(
  () => import("gtls-npm-libraries").then((mod) => mod.LoginPage),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen w-full flex justify-center items-center">
        <AnimatedLoading />
      </div>
    ),
  }
);

export default function Login() {
  const isTest = process.env.NEXT_PUBLIC_APP_IS_TESTING || false;
  const googleKey = process.env.NEXT_PUBLIC_APP_RECAPTHCA_API || "";
  const gtamURl = process.env.NEXT_PUBLIC_APP_GTAM_API_URL || "";
  const appDomain = process.env.NEXT_PUBLIC_APP_SESSION_DOMAIN || "";
  const backToHomeURL = process.env.NEXT_PUBLIC_APP_BACK_TO_HOME_URL || "";

  const loginURL =
    process.env.NEXT_PUBLIC_APP_BACKEND_URL + AUTH_ENDPOINTS.login;
  const microsoftURL =
    process.env.NEXT_PUBLIC_APP_BACKEND_URL + AUTH_ENDPOINTS["microsoft-token"];

  useEffect(() => {
    clearMSALLocalStorage();

    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (config.url?.includes('microsoft-token')) {
          config.withCredentials = false;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => Promise.reject(error)
    );

    // Cleanup interceptors on unmount
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <div className="h-screen w-full">
      <ClientLoginPage
        appDomain={appDomain}
        googlekey={googleKey}
        redirectURL={process.env.NEXT_PUBLIC_APP_REDIRECT_ROUTE || "/landing-page"}
        loginURL={loginURL}
        gtamURl={gtamURl}
        pca={pca}
        canResetPassword={true}
        handleForgotPassword={() =>
          (window.location.href = AUTH_ENDPOINTS["forgot-password"])
        }
        microsoftURL={microsoftURL}
        backToHomeURL={backToHomeURL}
        gtlsLogo={
          <div className="ml-[14%]">
            <Image alt="logo" src={Logo} className="self-center" />
          </div>
        }
        redirectUrl={AUTH_ENDPOINTS["azure-callback"]}
        isTest={isTest == "true"}
      />
    </div>
  );
}