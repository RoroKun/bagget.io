import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from './providers';

const inter = Inter({ subsets: ["latin"] });

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
    "Alan Cortez",
    "Rohan Kunchala",
    "Cesar Rojas",
    "aleviating food insecurity",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
    </html>
  );
}
