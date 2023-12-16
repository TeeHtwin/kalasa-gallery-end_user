import { Metadata } from "next";
import "./globals.css";
import { Primary, Cardo_font } from "@/fonts/font";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import { config } from "@/config/config";

export const metadata: Metadata = {
  title: config.META_TITLE,
  description: config.META_DESC,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Primary.variable} ${Cardo_font.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
