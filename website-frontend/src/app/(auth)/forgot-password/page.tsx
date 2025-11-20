"use client";

import "dotenv/config";
import dynamic from "next/dynamic";

import truck from "@/lib/components/lottie/Data/Truck.json";
import success from "@/lib/components/lottie/Data/Success.json";

import Logo from "@/lib/assets/images/Logo.png";
import React from "react";
// REMOVED: import LottieComponent from "@/lib/components/lottie/LottieComponent"; // Moved to dynamic import
import Image from "next/image";

// 1. Dynamic import for the local Lottie component
const DynamicLottieComponent = dynamic(
  () => import("@/lib/components/lottie/LottieComponent"),
  {
    ssr: false,
    loading: () => null, // Optional: You might not need a visible loading state for a small utility component
  }
);

// 2. Dynamic import for the main page component from the library (Already correct)
const ClientForgotPasswordPage = dynamic(
  () => import("gtls-npm-libraries").then((mod) => mod.ForgotPasswordPage),
  {
    ssr: false,
    loading: () => (
      <div className="text-xl">Loading Password Reset Form...</div>
    ),
  }
);

export default function ForgotPassword() {
  const gtamURl = process.env.NEXT_PUBLIC_APP_GTAM_API_URL || "";

  return (
    <ClientForgotPasswordPage
      gtamURl={gtamURl}
      gtlsLogo={
        <div className="ml-[1%]">
          <Image alt="logo" src={Logo} className="self-center" />
        </div>
      }
      truck={truck}
      // 3. Pass the dynamically imported component here
      LottieComponent={DynamicLottieComponent}
      success={success}
    />
  );
}
