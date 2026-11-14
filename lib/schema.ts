import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(100, { message: "Name cannot exceed 100 characters" }),

  email: z
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email cannot exceed 100 characters" }),

  phone: z
    .string()
    .trim()
    .refine((val) => val === "" || /^\d+$/.test(val), {
      message: "Phone number must contain only numeric digits",
    })
    .refine((val) => val === "" || (val.length >= 10 && val.length <= 15), {
      message: "Phone number must be between 10 and 15 digits",
    }),

  subject: z
    .string()
    .trim()
    .min(2, { message: "Subject must be at least 2 characters long" })
    .max(100, { message: "Subject cannot exceed 100 characters" }),

  message: z
    .string()
    .trim()
    .min(5, { message: "Message must be at least 5 characters long" })
    .max(800, { message: "Message cannot exceed 800 characters" }),
})

export type ContactInput = z.infer<typeof contactSchema>

/** Body accepted by POST /api/email */
export const emailRequestSchema = contactSchema.extend({
  captchaToken: z
    .string({ error: "reCAPTCHA token is missing" })
    .min(1, { message: "reCAPTCHA token is missing" }),
})
