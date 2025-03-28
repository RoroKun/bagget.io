import { z } from "zod"

export const contactSchema = z.object({
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