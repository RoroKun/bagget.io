import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Text } from "@/components/utility/typography";
import { Toaster } from "@/components/ui/sonner"
import NavBar from "@/components/sections/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bag/Get",
  description:
    "Bag/Get the team building solutions to aleviate food insecurity",
  authors: [
    { name: "Rohan Kunchala" },
    { name: "Alan Cortez", url: "https://alancortez.dev/" },
  ],
  creator: "Alan Cortez",
  keywords: [
    "Bag/Get",
    "Bagget",
    "baggit",
    "dashboard",
    "bag get",
    "bag get app",
    "bag/get application",
    "bag/get staff dashboard",
    "bag/get dashboard",
    "software",
    "food pantry software",
    "serve more",
    "waste less",
    "Alan Cortez",
    "Rohan Kunchala",
    "Cesar Rojas",
    "alleviating food insecurity",
    "Food Bank Solutions",
    "Food Pantry Solutions",
    "Pantry Solutions",
    "Engineering Social Justice",
    "Engineering Social Justice 1st place",
    "CSUF Engineering Social Justice",
    "CSU, Fullerton Engineering Social Justice",
    "SCAR Day",
    "CSUF SCAR Day",
    "CSU, Fullerton SCAR Day",
    "CSU, Fullerton SCAR Day 1st place",
    "csuf incubator",
    "startup",
    "csuf lightning pitch",
    "CSU, Fullerton SCAR Day 1st place",
    "San Jose Sunstone 2023 3rd place winners",
    "Sunstone 2023 3rd place winners",
    "Sunstone 2023",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
    other: {
      rel: "bag-get-icon",
      url: "/favicon.ico",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <NavBar/>
        {children}
        <Footer/>
        <Toaster position="top-center" richColors/>
      </body>
    </html>
  );
}

function Footer() {
  const date = new Date()
  

  return(
    <footer className="flex justify-center items-center py-6 px-10 bg-green-950">
      <Text className="text-lime-50">© {date.getFullYear()} All rights reserved.</Text>
    </footer>
  )
}