import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please share your name.")
    .max(100, "Please keep your name under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),
  businessType: z
    .string()
    .trim()
    .min(1, "Tell me what kind of business you run.")
    .max(100, "Please keep this under 100 characters."),
  bottleneck: z
    .string()
    .trim()
    .min(10, "Tell me a bit more about the bottleneck.")
    .max(2000, "Please keep this under 2000 characters."),
});

export type LeadInput = z.infer<typeof leadSchema>;
