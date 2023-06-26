import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const editItem = async ({ id, ...changes }) => {
  const existing = await db('items').where({ id, is_deleted: false }).first();

  if (!existing) {
    throw new NotFoundError('Tovar topilmadi.');
  }

  const result = await db('items')
    .where({ id })
    .update({ ...changes });

  return result;
};
