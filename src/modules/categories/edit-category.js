import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const editCategory = async ({ id, ...changes }) => {
  const existing = await db('categories').where({ id, is_deleted: false }).first();

  if (!existing) {
    throw new NotFoundError('Turkum topilmadi.');
  }

  const result = await db('categories')
    .where({ id })
    .update({ ...changes })
    .returning('*');

  return result[0];
};
