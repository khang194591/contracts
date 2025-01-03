import { initContract } from '@ts-rest/core';
import { formsContract } from './forms';
import { authContract } from './auth';

export const APP_NAME = 'KTD';

const c = initContract();

export const contract = c.router({
  auth: authContract,
  forms: formsContract,
});
