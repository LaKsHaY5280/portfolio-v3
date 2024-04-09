import type { Metadata } from "next";
import "./globals.css";
import Body from "./body";
import { client } from "@/lib/sanity";

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
      <Body children={children} />
    </html>
  );
}
