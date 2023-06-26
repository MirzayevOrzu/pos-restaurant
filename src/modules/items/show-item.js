import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showItem = async ({ id }) => {
  const category = await db('items').where({ id, is_deleted: false }).first();

  if (!category) {
    throw new NotFoundError('Tovar topilmadi.');
  }

  return category;
};
