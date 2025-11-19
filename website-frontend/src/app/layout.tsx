import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Geist, Geist_Mono, Funnel_Display, DM_Sans } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const metadataBase = new URL("https://fmcshops.com");

  return {
    title: "Gold Tiger Logistics Solutions X",
    description: "SMARTER SUPPLY CHAIN MANAGEMENT",
    applicationName: "GTLS",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Gtls" }],
    metadataBase: metadataBase,
    icons: {
      icon: [`/favicon.ico`],
      apple: ["/apple-touch-icon.png"],
      shorcut: ["/apple-touch-icon.png"],
    },
    manifest: "/site.webmanifest",
    background_color: "#fff",
    theme_color: "#ffffff",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${funnelDisplay.variable} ${dmSans.variable} antialiased`}
      >
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
