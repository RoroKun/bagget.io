"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { contactSchema } from "@/lib/schema"
import { toast } from "sonner"
import { useState } from "react"
import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactForm() {
    const [isValidCaptcha, setIsValidCaptcha] = useState<boolean>(false);

    const form = useForm<z.infer<typeof contactSchema>>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
    })
   
    async function sendEmail(emailData: z.infer<typeof contactSchema>) {
      const {firstName, lastName, email, phone, subject, message } = emailData

      const info = {
        name: firstName + " " + lastName,
        from: email,
        phone,
        subject,
        message
      }

      try {
        await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(info)
        })
      } catch (err) {
        toast.error(`ERROR: ${err}`, {
          description: "Sorry we couldn't send your email, please try again.",
        })
        return
      }

      toast.success("We received your email!", {
        description: "We'll get back to you shortly.",
      })
    }

    async function verifyCaptcha(token: string | null) {
      try {
        await fetch('/api/captcha', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token
          }, null, 2)
        })

        setIsValidCaptcha(true)
      } catch (_) {
        toast.error(`Error Validating Captcha`, {
          description: "Please try again.",
        })
        setIsValidCaptcha(false)
      }
    }



    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-8 text-gray-50">
            <div className="flex justify-between gap-10">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel>First Name*</FormLabel>
                          <FormControl>
                              <Input {...field} required/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel>Last Name*</FormLabel>
                          <FormControl>
                              <Input {...field} required/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel htmlFor="email">Email*</FormLabel>
                    <FormControl>
                        <Input {...field} type="email" required/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Subject*</FormLabel>
                    <FormControl>
                        <Input {...field} required/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Message*</FormLabel>
                    <FormControl>
                        <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <div className="flex flex-col gap-5 justify-center items-center">
              <ReCAPTCHA
                onChange={(token: string | null) => verifyCaptcha(token)}
                sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
              />

              <Button type="submit" disabled={form.formState.isSubmitting || !isValidCaptcha} className="w-full bg-gradient-to-r from-lime-50 to-lime-100 hover:from-lime-100 hover:to-lime-200 text-gray-950 weight-semibold">Submit</Button>
            </div>
          </form>
        </Form>
      )
}


