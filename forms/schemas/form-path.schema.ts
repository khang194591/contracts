import { z } from 'zod';

export const FormPathSchema = z.object({
  formId: z.coerce.number(),
});
