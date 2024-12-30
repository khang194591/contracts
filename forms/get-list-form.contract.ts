import { initContract } from "@ts-rest/core";
import { GetListFormSchema } from "./schemas";

const c = initContract();

export const getListFormContract = c.router({
  handle: {
    method: "GET",
    path: "/forms",
    responses: {
      200: GetListFormSchema,
    },
  },
});
