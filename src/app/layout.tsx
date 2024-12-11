

import type { Metadata } from "next";
import { inter, poppins, pacifico, yuji_mai, great_vibes } from "../components/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.variable, poppins.variable, pacifico.variable, yuji_mai.variable, great_vibes.variable)}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
