import type { Metadata } from "next"
import { PdfDocument } from "@/components/legal/pdf-document"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when you use the Bag/Get website and software.",
}

export default function TermsPage() {
  return (
    <PdfDocument
      title="Terms of Service"
      summary="The agreement that applies when you use the Bag/Get website and software."
      src="/terms-of-service.pdf"
    />
  )
}
