"use client";

import dynamic from "next/dynamic";
import React from "react";
import tiremarkBackground from "@/lib/assets/images/tiremark.webp";

const ClientNotFoundPage = dynamic(
  () => import("gtls-npm-libraries").then((mod) => mod.NotFoundPage),
  {
    ssr: false,

    loading: () => (
      <div className="text-white text-xl">Loading Not Found Page...</div>
    ),
  }
);

export default function NotFound() {
  return (
    <div
      className="bg-tiremark min-h-full w-screen"
      style={{
        backgroundImage: `url(${tiremarkBackground.src})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Use the dynamically imported component */}
      <div className="w-full"><ClientNotFoundPage tiremarkURL={tiremarkBackground.src} />
      </div>
    </div>
  );
}
