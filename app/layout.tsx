import type { Metadata } from "next";
import "./globals.css";
import Body from "./body";


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
      {/* <body> */}
        <Body children={children} />
      {/* </body> */}
    </html>
  );
}
