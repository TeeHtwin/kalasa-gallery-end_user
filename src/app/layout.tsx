import { Metadata } from "next";
import "./globals.css";
import { Primary, Cardo_font } from "@/fonts/font";
import { config } from "@/config/config";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import Provider from "./components/common/Provider";

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
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
