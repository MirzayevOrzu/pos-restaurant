import db from '../../db/index.js';

export const listCategories = async () => {
  const dbQuery = db('categories').where({ is_deleted: false }).select('*');

  const categories = await dbQuery;

  return categories;
};
