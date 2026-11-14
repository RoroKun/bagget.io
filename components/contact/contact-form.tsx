"use client"

import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import ReCAPTCHA from "react-google-recaptcha"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema, type ContactInput } from "@/lib/schema"

// Field styling from the Framer form: grey label above a soft, borderless field.
const labelClass = "text-xs font-medium text-[#888]"
const fieldClass =
  "h-10 rounded-lg border-none bg-[rgb(187_187_187/0.15)] px-3 text-base text-ink shadow-none placeholder:text-[#999] focus-visible:ring-2 focus-visible:ring-moss/40 md:text-sm"

const FIELDS: { name: Exclude<keyof ContactInput, "message">; label: string; type?: string; placeholder?: string; autoComplete: string }[] = [
  { name: "name", label: "Name", placeholder: "John Doe", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel" },
  { name: "subject", label: "Subject", autoComplete: "off" },
]

export default function ContactForm() {
  const recaptcha = useRef<ReCAPTCHA>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  })

  async function sendEmail(values: ContactInput) {
    if (!captchaToken) {
      toast.error("Please complete the reCAPTCHA first.")
      return
    }
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, captchaToken }),
      })
      const data: { message?: string } = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message ?? `Request failed (${res.status})`)

      toast.success("We received your email!", { description: "We'll get back to you shortly." })
      form.reset()
    } catch (err) {
      toast.error("Sorry, we couldn't send your email.", {
        description: `${err instanceof Error ? err.message : err} Please try again.`,
      })
    } finally {
      // reCAPTCHA tokens are single-use
      recaptcha.current?.reset()
      setCaptchaToken(null)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(sendEmail)}
        noValidate
        className="flex flex-col gap-[18px] rounded-[20px] bg-paper-bright p-5"
      >
        {FIELDS.map((f) => (
          <FormField
            key={f.name}
            control={form.control}
            name={f.name}
            render={({ field }) => (
              <FormItem className="gap-2.5">
                <FormLabel className={labelClass}>
                  {f.label}
                  {f.name === "phone" && <span className="font-normal"> (optional)</span>}
                </FormLabel>
                <FormControl>
                  <Input {...field} type={f.type} placeholder={f.placeholder} autoComplete={f.autoComplete} className={fieldClass} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="gap-2.5">
              <FormLabel className={labelClass}>Message</FormLabel>
              <FormControl>
                <Textarea {...field} rows={4} className={`${fieldClass} h-auto min-h-[100px] py-2.5`} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center max-[380px]:origin-center max-[380px]:scale-[0.9]">
          <ReCAPTCHA
            ref={recaptcha}
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY ?? ""}
            onChange={setCaptchaToken}
            onExpired={() => setCaptchaToken(null)}
          />
        </div>

        <button
          type="submit"
          disabled={form.formState.isSubmitting || !captchaToken}
          className="h-10 rounded-[10px] bg-[#333] text-sm font-semibold text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {form.formState.isSubmitting ? "Sending…" : "Submit"}
        </button>
      </form>
    </Form>
  )
}
