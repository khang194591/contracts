import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { CreateFormSchema } from "./schemas";

const c = initContract();

const FormResponseSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  status: z.string(),
  isTemplate: z.boolean(),
  responseEditable: z.boolean(),
  multipleResponse: z.boolean(),
  fields: z.array(
    z.object({
      id: z.coerce.number(),
      label: z.string(),
      type: z.string(),
      required: z.boolean(),
      options: z.array(z.string()).optional(),
    })
  ),
});

export const createFormContract = c.router({
  handle: {
    method: "POST",
    path: "/forms",
    responses: {
      201: FormResponseSchema,
    },
    body: CreateFormSchema,
    summary: "Create a form",
  },
});
