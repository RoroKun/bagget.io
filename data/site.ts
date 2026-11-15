export const APP_URL = "https://app.bagget.io"
export const LINKEDIN_URL = "https://www.linkedin.com/company/bagget"
export const CONTACT_EMAILS = ["alan@bagget.io", "rohan@bagget.io"]

export const NAV_LINKS = [
  { href: "/product", label: "Product" },
  { href: "/our-story", label: "Our Story" },
  { href: "/news", label: "News" },
] as const

export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/product", label: "Product" },
  { href: "/news", label: "News" },
  { href: LINKEDIN_URL, label: "LinkedIn" },
  { href: null, label: "Legal" }, // no legal page exists yet (not linked on the Framer site either)
  { href: "/contact", label: "Contact" },
] as const
