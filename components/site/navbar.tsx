"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { APP_URL, NAV_LINKS } from "@/data/site"
import { cn } from "@/lib/utils"

const MOBILE_LINKS = [{ href: "/", label: "Home" }, ...NAV_LINKS, { href: "/contact", label: "Contact" }]

export default function NavBar() {
  // usePathname is nullable while the pages/ router (API routes) coexists with app/
  const pathname = usePathname() ?? "/"
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // close the mobile menu on navigation (state adjusted during render, per React docs)
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  // Framer: nav sits 34px down on the home page, 12px elsewhere, and docks to 2px on scroll.
  const top = scrolled ? 2 : pathname === "/" ? 34 : 12

  return (
    <header
      className="fixed inset-x-0 z-50 px-3 transition-[top] duration-300 ease-out min-[810px]:px-6"
      style={{ top }}
    >
      <nav className="mx-auto max-w-[1035px] overflow-hidden rounded-xl bg-[#111] shadow-[0_4px_20px_rgb(0_0_0/0.18)]">
        <div className="flex h-[60px] items-center justify-between px-4 min-[810px]:px-[50px]">
          <div className="flex items-center gap-[30px]">
            <Link href="/" aria-label="Bag/Get home" className="shrink-0">
              <Image src="/framer/brand/logo-mark.png" alt="" width={40} height={40} priority />
            </Link>
            <ul className="hidden items-center gap-[30px] min-[810px]:flex">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-paper-bright transition-colors hover:text-paper"
                    aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="rounded-full bg-ink-soft px-5 py-2.5 leading-[1.2] text-paper transition-colors hover:bg-[#333]"
            >
              Contact
            </Link>
            <Link
              href={APP_URL}
              className="hidden rounded-full bg-moss px-5 py-2.5 leading-[1.2] text-paper transition-colors hover:bg-[#0a4022] min-[810px]:block"
            >
              Log In
            </Link>
            <button
              type="button"
              className="text-paper min-[810px]:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              className="flex flex-col items-center gap-5 overflow-hidden min-[810px]:hidden"
            >
              {MOBILE_LINKS.map((l) => (
                <li key={l.href} className="first:pt-2">
                  <Link href={l.href} className={cn("text-lg text-paper-bright", pathname === l.href && "text-mint")}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pb-6">
                <Link href={APP_URL} className="rounded-full bg-moss px-5 py-2.5 text-paper">
                  Log In
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
