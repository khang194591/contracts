import { initContract } from '@ts-rest/core';
import { formsContract } from './modules';

export * from './modules';

export const APP_NAME = 'KTD';

const c = initContract();

export const contract = c.router({
  forms: formsContract,
});
