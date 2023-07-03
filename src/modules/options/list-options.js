import db from '../../db/index.js';

export const listOptions = async ({ item_id }) => {
  const dbQuery = db('item_options').where({ 'item_options.is_deleted': false }).select('*');

  if (item_id) {
    dbQuery.andWhere('item_options.item_id', item_id);
  }

  const items = await dbQuery;

  return items;
};
