import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeOption = async ({ id }) => {
  const option = await db('item_options').where({ id }).first();

  if (!option) {
    throw new NotFoundError('Variant topilmadi.');
  }

  await db('item_options').where({ id }).update({ is_deleted: true });

  return db('items').where({ id: option.item_id }).first();
};
