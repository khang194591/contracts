import { z } from 'zod';
import { FieldType, FormStatus } from '../form.enum';

export const CreateFormSchema = z.object({
  name: z.string(),
  status: z.nativeEnum(FormStatus).optional(),
  isTemplate: z.boolean().optional(),
  responseEditable: z.boolean().optional(),
  multipleResponse: z.boolean().optional(),
  fields: z.array(
    z.object({
      id: z.coerce.string(),
      label: z.string(),
      type: z.nativeEnum(FieldType),
      required: z.boolean().optional(),
      options: z.array(z.string()).optional(),
    }),
  ),
});

export type CreateFormSchemaType = z.infer<typeof CreateFormSchema>;
