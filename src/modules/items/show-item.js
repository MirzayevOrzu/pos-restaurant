import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showItem = async ({ id }) => {
  const category = await db('items')
    .where({ 'items.id': id, 'items.is_deleted': false, 'item_options.is_deleted': false })
    .innerJoin('item_options', 'items.id', 'item_options.item_id')
    .select(
      'items.*',
      db.raw(`
      json_agg(
        json_build_object(
          'id', item_options.id,
          'item_id', item_options.item_id,
          'measurement_id', item_options.measurement_id,
          'unit', item_options.unit,
          'price', item_options.price
        )
      ) as options
    `)
    )
    .groupBy('items.id')
    .first();

  if (!category) {
    throw new NotFoundError('Tovar topilmadi.');
  }

  return category;
};
