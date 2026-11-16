import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

/**
 * Legal document page: back link, title, download button and the PDF embedded in the page.
 * Browsers that can't show PDFs inline (notably iOS Safari, which only draws page one) fall back
 * to the "Open the PDF" link inside the <object>, and the Download button is always available.
 */
export function PdfDocument({ title, summary, src }: { title: string; summary: string; src: string }) {
  return (
    <main className="px-6 pb-20 pt-[130px] min-[810px]:pt-[150px]">
      <div className="mx-auto max-w-[960px]">
        <Link
          href="/legal"
          className="inline-flex items-center gap-2 font-light text-ink/70 transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-4" strokeWidth={1.75} />
          Legal
        </Link>

        <div className="mt-6 flex flex-col gap-5 min-[810px]:flex-row min-[810px]:items-end min-[810px]:justify-between">
          <div>
            <h1 className="text-[36px] font-semibold leading-[1.2] text-ink min-[810px]:text-[48px]">{title}</h1>
            <p className="mt-3 max-w-[560px] font-display text-lg font-light leading-[1.4] text-ink">{summary}</p>
          </div>
          <a
            href={src}
            download
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-forest px-6 py-3 font-medium text-paper-bright transition-colors hover:bg-moss"
          >
            <Download className="size-5" strokeWidth={1.75} />
            Download PDF
          </a>
        </div>

        <object
          data={src}
          type="application/pdf"
          aria-label={title}
          className="mt-10 h-[80vh] min-h-[480px] w-full rounded-[24px] bg-paper-bright shadow-[0_8px_24px_rgb(0_0_0/0.15)]"
        >
          <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center text-ink">
            <p>Your browser can&apos;t show this document inline.</p>
            <a href={src} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">
              Open the PDF
            </a>
          </div>
        </object>
      </div>
    </main>
  )
}
