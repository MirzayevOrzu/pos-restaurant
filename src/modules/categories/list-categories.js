import db from '../../db/index.js';

export const listCategories = async () => {
  const dbQuery = db('categories').where({ is_deleted: false }).select('*');

  const count = await dbQuery.clone().count().groupBy('id');
  const categories = await dbQuery;

  return {
    count: count.length,
    list: categories,
  };
};
