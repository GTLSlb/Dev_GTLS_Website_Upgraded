"use client";

import "dotenv/config";
import React, { useContext} from "react";
import dynamic from "next/dynamic";

// 1. ORIGINAL IMPORTS - Suspects are LottieComponent and pca
// import LottieComponent from "@/lib/components/lottie/LottieComponent"; // <-- MOVED TO DYNAMIC
import Lock from "@/lib/components/lottie/Data/lock.json";

import { pca } from "@/lib/utils/helper";
import { AuthContext } from "@/lib/context/auth_context";
import { AUTH_ENDPOINTS } from "@/lib/api/endpoints";
import { backendUrl } from "@/lib/api/endpoints";

// 2. DYNAMIC IMPORT for the Lottie component
const DynamicLottieComponent = dynamic(
  () => import("@/lib/components/lottie/LottieComponent"),
  {
    ssr: false,
    loading: () => null, // Optional loading state
  }
);


const ClientNoAccessPage = dynamic(
  () => import("gtls-npm-libraries").then((mod) => mod.NoAccessPage),
  {
    ssr: false,
    loading: () => <div className="text-xl">Loading Access Denied Page...</div>,
  }
);

function NoAccess() {
  const { setToken, setUser, user } = useContext(AuthContext);

  const gtamURl = process.env.NEXT_PUBLIC_APP_GTAM_API_URL || "";
  const appDomain = process.env.NEXT_PUBLIC_APP_SESSION_DOMAIN || "";
  const appURL = process.env.NEXT_PUBLIC_APP_APP_URL || "";

  return (
    <ClientNoAccessPage
      Lock={Lock}
      // 3. PASS THE DYNAMICALLY IMPORTED Lottie component
      LottieComponent={DynamicLottieComponent} 
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

export default NoAccess;