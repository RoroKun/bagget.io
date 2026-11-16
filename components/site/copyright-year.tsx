"use client"

const yearFormat = new Intl.DateTimeFormat("en-US", { year: "numeric" })

/**
 * Current year for the footer copyright line. Rendered on the client so a statically built page
 * doesn't keep showing the year it was built in; `suppressHydrationWarning` covers the case where
 * the prerendered HTML and the visitor's clock disagree (e.g. a page built last December).
 */
export function CopyrightYear() {
  return <span suppressHydrationWarning>{yearFormat.format(new Date())}</span>
}
