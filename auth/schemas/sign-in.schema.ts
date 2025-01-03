import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const SignInResponseSchema = z.object({
  token: z.string(),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
export type SignInResponseSchemaType = z.infer<typeof SignInResponseSchema>;
