import type { Metadata } from "next";

// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "PulseWatch",
  description:
    "PulseWatch is a web app for tracking services outages and uptime.",
  icons: {
    icon: "/images/Logo v2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
