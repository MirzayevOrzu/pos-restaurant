import db from '../../db/index.js';

export const listUsers = async () => {
  const dbQuery = db('users').where({ is_deleted: false }).select('*');

  const users = await dbQuery;

  return users
};
