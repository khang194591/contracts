import { initContract } from '@ts-rest/core';
import { authContract } from './auth';
import { formsContract } from './forms';

export const APP_NAME = 'KTD';

const c = initContract();

export * from './forms';

export const contract = c.router({
  auth: authContract,
  forms: formsContract,
});
