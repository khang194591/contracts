import { z } from 'zod';
import { PaginationResponseSchema } from '~/contracts/common';

export const ListFormResponseSchema = PaginationResponseSchema.extend({
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
  formTemplates: z.array(
    z.object({
      id: z.coerce.number(),
      name: z.string(),
    }),
  ),
});
