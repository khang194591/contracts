import { z } from 'zod';

export const SignUpSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export const SignUpResponseSchema = z.object({
  token: z.string(),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type SignUpResponseSchemaType = z.infer<typeof SignUpResponseSchema>;
