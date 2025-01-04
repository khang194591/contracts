import { initContract } from '@ts-rest/core';
import { IdNumberSchema, PaginationQuerySchema } from '../common';
import {
  CreateFormSchema,
  FormPathSchema,
  ListFormResponseSchema,
  UpdateFormSchema,
} from './schemas';

const c = initContract();

export const formsContract = c.router({
  createForm: {
    method: 'POST',
    path: '/forms',
    body: CreateFormSchema,
    responses: { 201: IdNumberSchema },
    summary: 'Create a form',
  },
  updateForm: {
    method: 'PATCH',
    path: '/forms/:formId',
    pathParams: FormPathSchema,
    body: UpdateFormSchema,
    responses: { 200: IdNumberSchema },
    summary: 'Update a form',
  },
  listForm: {
    method: 'GET',
    path: '/forms',
    query: PaginationQuerySchema,
    responses: { 200: ListFormResponseSchema },
    summary: 'List forms',
  },
  getForm: {
    method: 'GET',
    path: '/forms/:formId',
    pathParams: FormPathSchema,
    responses: { 200: IdNumberSchema },
    summary: 'Get a form',
  },
  deleteForm: {
    method: 'DELETE',
    path: '/forms/:formId',
    pathParams: FormPathSchema,
    responses: { 200: IdNumberSchema },
    summary: 'Delete a form',
  },
});
