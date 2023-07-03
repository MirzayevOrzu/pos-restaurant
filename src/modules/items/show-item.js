import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showItem = async ({ id }) => {
  const item = await db('items').where({ id: id, is_deleted: false }).select('*').first();

  if (!item) {
    throw new NotFoundError('Tovar topilmadi.');
  }

  return item;
};
