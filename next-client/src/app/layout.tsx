import type { Metadata } from "next";

// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";

// Fonts
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "PulseWatch",
  description:
    "PulseWatch is a web app for tracking services outages and uptime.",
  icons: {
    icon: "/images/LogoV2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <BootstrapClient />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
