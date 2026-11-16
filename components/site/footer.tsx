import Link from "next/link"
import { FOOTER_LINKS } from "@/data/site"
import { CopyrightYear } from "./copyright-year"
import { Wordmark } from "./wordmark"

export default function Footer() {
  return (
    <footer className="bg-dots bg-ink text-paper">
      <div className="mx-auto flex max-w-[1040px] flex-col items-center gap-10 px-6 py-14 min-[810px]:flex-row min-[810px]:items-end min-[810px]:justify-between min-[810px]:py-16">
        <div className="flex flex-col items-center gap-5 min-[810px]:items-start">
          <Wordmark className="w-[246px] min-[810px]:w-[403px] min-[1200px]:w-[606px]" />
          <p className="text-xs font-light">© <CopyrightYear /> All rights reserved.</p>
        </div>
        <ul className="flex flex-col items-center gap-3 font-light text-paper-bright min-[810px]:items-end">
          {FOOTER_LINKS.map((l) => (
            <li key={l.label}>
              {l.href.startsWith("http") ? (
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className="hover:text-paper">
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
