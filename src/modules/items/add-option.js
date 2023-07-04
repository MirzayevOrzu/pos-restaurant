import db from '../../db/index.js';

export const addOption = async (data) => {
  await db('item_options').insert(data);

  return db('items').where({ id: data.item_id }).first();
};
