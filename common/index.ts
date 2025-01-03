import { z } from 'zod';

export const PaginationQuerySchema = z.object({
  pageIndex: z.coerce.number().min(0).default(0),
  pageSize: z.coerce.number().min(1).max(100).default(10),
});

export const PaginationResponseSchema = z.object({
  pageIndex: z.coerce.number(),
  pageSize: z.coerce.number(),
  rowCount: z.coerce.number(),
});

export const IdNumberSchema = z.object({
  id: z.coerce.number(),
});
