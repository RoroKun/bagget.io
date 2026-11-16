import type { Metadata } from "next"
import { PdfDocument } from "@/components/legal/pdf-document"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bag/Get collects, uses and protects information.",
}

export default function PrivacyPage() {
  return (
    <PdfDocument
      title="Privacy Policy"
      summary="How we collect, use and protect the information handled through Bag/Get."
      src="/privacy-policy.pdf"
    />
  )
}
