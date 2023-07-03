import db from '../../db/index.js';

export const listItems = async () => {
  const dbQuery = db('items').where({ is_deleted: false }).select('*');

  const items = await dbQuery;

  return items;
};
