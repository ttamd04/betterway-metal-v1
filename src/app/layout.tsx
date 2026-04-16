import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Betterway Metal | Scrap Metal Recycling in North Parramatta",
  description:
    "Fair prices and fast service for all scrap metal — copper, brass, aluminium, stainless steel, e-waste, radiators, batteries, motors and more. North Parramatta's trusted scrap metal recycler. Call 0426 515 998.",
  keywords: [
    "scrap metal",
    "recycling",
    "North Parramatta",
    "copper",
    "brass",
    "aluminium",
    "stainless steel",
    "e-waste",
    "scrap yard",
    "metal recycler",
    "Sydney",
  ],
  icons: {
    icon: "/betterway-favicon.png",
  },
  openGraph: {
    title: "Betterway Metal | Scrap Metal Recycling in North Parramatta",
    description:
      "Fair prices and fast service for all scrap metal. North Parramatta's trusted recycler.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
