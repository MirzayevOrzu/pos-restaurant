import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeItem = async ({ id }) => {
  const category = await db('items').where({ id }).first();

  if (!category) {
    throw new NotFoundError('Tovar topilmadi.');
  }

  const result = await db('items').where({ id }).update({ is_deleted: true });

  return result;
};
