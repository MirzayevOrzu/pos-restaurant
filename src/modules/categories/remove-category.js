import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeCategory = async ({ id }) => {
  const category = await db('categories').where({ id }).first();

  if (!category) {
    throw new NotFoundError('Turkum topilmadi.');
  }

  const result = await db('categories').where({ id }).update({ is_deleted: true });

  return result;
};
