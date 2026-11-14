import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/site/navbar"
import Footer from "@/components/site/footer"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bagget.io"),
  title: {
    default: "Bag/Get",
    template: "%s | Bag/Get",
  },
  description:
    "Case management software made simple to intake, manage, and serve our communities. Built for food pantries, food banks, and community resource centers.",
  authors: [
    { name: "Rohan Kunchala", url: "https://linkedin.com/in/rohankunchala" },
    { name: "Alan Cortez", url: "https://alancortez.dev/" },
  ],
  creator: "Alan Cortez",
  keywords: [
    "Bag/Get",
    "Bagget",
    "baggit",
    "bag get",
    "bag get app",
    "bag/get application",
    "bag/get staff dashboard",
    "bag/get dashboard",
    "case management software",
    "food pantry software",
    "food bank software",
    "community center software",
    "volunteer management",
    "offline check-in",
    "QR code check-in",
    "serve more",
    "waste less",
    "Alan Cortez",
    "Rohan Kunchala",
    "alleviating food insecurity",
    "Food Bank Solutions",
    "Food Pantry Solutions",
    "Pantry Solutions",
    "Engineering Social Justice",
    "CSUF Engineering Social Justice",
    "CSUF SCAR Day",
    "csuf incubator",
    "Titan Fast Pitch",
    "Larta Institute",
    "Pando Days",
    "Sunstone",
    "Public Benefit Corporation",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Bag/Get — All in one platform",
    description: "Case management software made simple to intake, manage, and serve our communities.",
    url: "https://bagget.io",
    siteName: "Bag/Get",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="relative overflow-x-clip">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
