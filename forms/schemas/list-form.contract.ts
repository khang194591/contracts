import { z } from 'zod';

export const ListFormResponseSchema = z.object({
  items: z.array(
    z.object({
      id: z.coerce.number(),
      name: z.string(),
      status: z.string(),
      isTemplate: z.boolean(),
      responseEditable: z.boolean(),
      multipleResponse: z.boolean(),
    }),
  ),
});
