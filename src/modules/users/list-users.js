import db from '../../db/index.js';

export const listUsers = async () => {
  const dbQuery = db('users').select('*');

  const count = await dbQuery.clone().count().groupBy('id');
  const users = await dbQuery;

  return {
    count: count.length,
    list: users,
  };
};
