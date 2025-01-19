import { z } from 'zod';
import { FieldType, FormStatus } from '../form.enum';

const FormFieldSchema = z.object({
  id: z.coerce.string(),
  label: z.string(),
  type: z.nativeEnum(FieldType),
  required: z.boolean(),
  options: z.array(z.string()),
});

export const GetFormResponseSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  status: z.nativeEnum(FormStatus),
  isTemplate: z.boolean(),
  responseEditable: z.boolean(),
  multipleResponse: z.boolean(),
  fields: z.array(FormFieldSchema),
});
