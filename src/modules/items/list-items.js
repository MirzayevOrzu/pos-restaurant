import db from '../../db/index.js';

export const listItems = async () => {
  const dbQuery = db('items')
    .where({ 'items.is_deleted': false, 'item_options.is_deleted': false })
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
    );

  const items = await dbQuery.groupBy('items.id');

  return items;
};
