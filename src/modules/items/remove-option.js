import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeOption = async ({ id }) => {
  const option = await db('item_options').where({ id }).first();

  if (!option) {
    throw new NotFoundError('Variant topilmadi.');
  }

  const result = await db('item_options').where({ id }).update({ is_deleted: true });

  return result;
};
