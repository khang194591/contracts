import { z } from 'zod';
import { FieldType, FormStatus } from '../form.enum';

export const CreateFormDataSchema = z.object({
  templateId: z.coerce.number().optional(),
});

export const FormTemplateResSchema = z
  .object({
    id: z.coerce.number(),
    name: z.string(),
    multipleResponse: z.boolean(),
    responseEditable: z.boolean(),
    fields: z.array(
      z.object({
        id: z.coerce.number(),
        label: z.string(),
        type: z.nativeEnum(FieldType),
        required: z.boolean(),
        options: z.any().nullable(),
      }),
    ),
  })
  .nullable();

export const CreateFormSchema = z.object({
  name: z.number(),
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

export type CreateFormType = z.infer<typeof CreateFormSchema>;
export type FormTemplateResType = z.infer<typeof FormTemplateResSchema>;
