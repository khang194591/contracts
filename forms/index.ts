import { initContract } from '@ts-rest/core';
import { IdNumberSchema, PaginationQuerySchema } from '../common';
import { CreateFormSchema, ListFormResponseSchema } from './schemas';

const c = initContract();

export const formsContract = c.router({
  createForm: {
    method: 'POST',
    path: '/forms',
    responses: {
      201: IdNumberSchema,
    },
    body: CreateFormSchema,
    summary: 'Create a form',
  },
  getListForm: {
    method: 'GET',
    path: '/forms',
    query: PaginationQuerySchema,
    responses: { 200: ListFormResponseSchema },
  },
});
