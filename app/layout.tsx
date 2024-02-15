import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montfont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chani Wachsstock",
  description: "Graphics Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montfont.className + " flex gap-8"}>
        {/* <ul className="left-10 top-10 z-10">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> */}
        {children}
      </body>
    </html>
  );
}
