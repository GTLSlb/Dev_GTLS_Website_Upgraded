"use client";

import dynamic from "next/dynamic";

const ClientMaintenancePage = dynamic(
  () => import("gtls-npm-libraries").then((mod) => mod.MaintenancePage),
  {
    ssr: false,
    loading: () => <div className="text-xl">Loading Maintenance Status...</div>,
  }
);

export default function GTLSMaintenancePage() {
  return <ClientMaintenancePage />;
}
