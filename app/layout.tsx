import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Text } from "@/components/utility/typography";
import { BetterButton } from "@/components/ui/button";
import Image from "next/image";
import { Redirect } from "@/components/utility/link";
import { Toaster } from "@/components/ui/sonner"

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
    { name: "Cesar Rojas" },
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

function NavBar() {
  return(
    <header className="fixed z-50 mt-3 left-1/2 -translate-x-1/2 text-gray-50">
      <nav className="bg-gradient-to-br from-green-950 to-green-900 shadow-lg flex justify-center items-center py-2 px-10 rounded-4xl gap-8">
        <Redirect redirect={"/"}>
          <div className="w-8 h-8">
            <Image 
              src='/favicon-mono.svg' 
              alt='bagget logo' 
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </Redirect>
        {/* TODO: make mobile responsive */}
        <Redirect redirect={"/the-challenge"}>
          <Text size="small">The Challenge</Text>
        </Redirect>
        <Redirect redirect={"/our-story"}>
          <Text size="small">Our Story</Text>
        </Redirect>
        <Redirect redirect={"/news"}>
          <Text size="small">News</Text>
        </Redirect>
        <BetterButton link="/contact" variant="secondary"><Text>Contact</Text></BetterButton>
      </nav>
    </header>
  )
}

function Footer() {
  const date = new Date()
  

  return(
    <footer className="flex justify-center items-center py-6 px-10 bg-green-950">
      <Text className="text-lime-50">© {date.getFullYear()} All rights reserved.</Text>
    </footer>
  )
}