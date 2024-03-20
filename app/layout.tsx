import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteLoader from "@/components/elements/SiteLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lakshay Goyal - Software Engineer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
