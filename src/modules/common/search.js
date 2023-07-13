import db from '../../db/index.js';

export const search = async (q = '') => {
  const [users, categories, items, measurements] = await Promise.all([
    db('users').whereILike(db.raw('first_name || last_name'), `%${q}%`).select('*'),
    db('categories').whereILike('name', `%${q}%`).select('*'),
    db('items').whereILike('name', `%${q}%`).select('*'),
    db('measurements').whereILike('name', `%${q}%`).select('*'),
  ]);

  return [...users, ...categories, ...items, ...measurements];
};
