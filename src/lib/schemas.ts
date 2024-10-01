import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password is required." }),
});

export const signUpSchema = z.object({
  name: z.string().min(3, { message: "Full name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
});

export const newPasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
  confirmPassword: z
    .string()
    .min(8, { message: "Passwords have to be the same." }),
});

export const cardSchema = z.object({
  cardNumber: z.coerce
    .number()
    .min(1, { message: "Card Number is required" })
    .max(12, { message: "Card number is invalid." }),
  cardValidity: z.coerce
    .number()
    .min(1, { message: "Card Validity is required" })
    .max(4, { message: "Card validity is invalid" }),
  cardCvv: z.coerce
    .number()
    .min(1, { message: "Card Cvv is required" })
    .max(3, { message: "Card cvv is invalid" }),
});

export const NewAddressSchema = z.object({
  name: z.string().min(3, { message: "Full name is required" }),
  addressLabel: z.string().min(8, { message: "Address Label is required" }),
  address: z.string().min(8, { message: "Address is required" }),
  phone: z.coerce.number().min(8, { message: "Phone Number is requires" }),
  city: z.string().min(3, { message: "City is required" }),
  note: z.string().optional(),
});
