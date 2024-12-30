import { initContract } from "@ts-rest/core";
import { createFormContract } from "./create-form.contract";
import { getListFormContract } from "./get-list-form.contract";

const c = initContract();

export const formsContract = c.router({
  createForm: createFormContract.handle,
  getListForm: getListFormContract.handle,
});
