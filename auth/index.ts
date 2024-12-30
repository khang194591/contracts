import { initContract } from "@ts-rest/core";
import { signInContract } from "./sign-in.contract";

export * from "./schemas";

const c = initContract();

export const authContract = c.router({
  signIn: signInContract,
});
