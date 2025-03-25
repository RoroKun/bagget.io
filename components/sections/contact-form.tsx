"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"

const contactSchema = z.object({
    firstName: z.string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name cannot exceed 50 characters" })
    .trim(),
  
  lastName: z.string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name cannot exceed 50 characters" })
    .trim(),
  
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .max(50, { message: "Email cannot exceed 50 characters" }),
  
  phone: z.string()
    .optional()
    .refine(
        (val) => val === undefined || val === '' || /^\d+$/.test(val),
        { message: "Phone number must contain only numeric digits" }
    )
    .refine(
        (val) => val === undefined || val === '' || (val.length >= 10 && val.length <= 15), 
        { message: "Phone number must be between 10 and 15 digits" }
    ),
  
  subject: z.string()
    .min(2, { message: "Subject must be at least 2 characters long" })
    .max(100, { message: "Subject cannot exceed 100 characters" })
    .trim(),
  
  message: z.string()
    .min(5, { message: "Message must be at least 5 characters long" })
    .max(800, { message: "Message cannot exceed 800 characters" })
    .trim(),
})

export default function ContactForm() {
    // 1. Define your form.
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
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof contactSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }
    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-10">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
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
                        <FormItem>
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
}