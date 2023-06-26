import db from '../../db/index.js';

export const addItem = async ({ options, ...data }) => {
  const trx = await db.transaction();
  try {
    const item = await trx('items').insert(data).returning('id');

    await trx('item_options').insert(options.map((o) => ({ ...o, item_id: item[0].id })));

    await trx.commit();

    return true;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
};
