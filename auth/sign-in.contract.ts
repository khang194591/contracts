import { initContract } from '@ts-rest/core';
import { SignInResponseSchema, SignInSchema } from './schemas';

const c = initContract();

export const signInContract = c.router({
  handle: {
    method: 'POST',
    path: '/auth/sign-in',
    responses: {
      200: SignInResponseSchema,
    },
    body: SignInSchema,
    summary: 'Sign in',
  },
});
