import db from '../../db/index.js';

export const addItem = async ({ options, ...data }) => {
  const trx = await db.transaction();
  try {
    const item = await trx('items').insert(data).returning('*');

    await trx('item_options').insert(options.map((o) => ({ ...o, item_id: item[0].id })));

    await trx.commit();

    return item[0];
  } catch (error) {
    await trx.rollback();
    throw error;
  }
};
