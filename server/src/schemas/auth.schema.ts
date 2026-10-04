
import { z } from "zod";

/**
 * Zod validation schema for user registration.
 */
export const signupSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .trim()
    .min(1, "Name cannot be empty")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string({ message: "Email is required" })
    .trim()
    .toLowerCase()
    .email("Invalid email address format")
    .max(255, "Email cannot exceed 255 characters"),
  password: z
    .string({ message: "Password is required" })
    .min(6, "Password must be at least 6 characters long"),
  avatar_url: z
    .string()
    .url("Avatar URL must be a valid URL")
    .optional()
    .nullable()
    .or(z.literal("")),
});

/**
 * Zod validation schema for user login.
 */
export const loginSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .trim()
    .toLowerCase()
    .email("Invalid email address format"),
  password: z
    .string({ message: "Password is required" })
    .min(1, "Password cannot be empty"),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
