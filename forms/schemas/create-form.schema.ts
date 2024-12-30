import { z } from "zod";

export const CreateFormSchema = z.object({
  name: z.string(),
  status: z.string().optional(),
  isTemplate: z.boolean().optional(),
  responseEditable: z.boolean().optional(),
  multipleResponse: z.boolean().optional(),
  fields: z.array(
    z.object({
      id: z.coerce.string(),
      label: z.string(),
      type: z.string(),
      required: z.boolean().optional(),
      options: z.array(z.string()).optional(),
    })
  ),
});
