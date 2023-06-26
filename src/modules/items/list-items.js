import db from '../../db/index.js';

export const listItems = async () => {
  const dbQuery = db('items').where({ is_deleted: false }).select('*');

  const count = await dbQuery.clone().count().groupBy('id');
  const items = await dbQuery;

  return {
    count: count.length,
    list: items,
  };
};
