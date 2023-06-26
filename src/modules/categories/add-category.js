import db from '../../db/index.js';

export const addCategory = async (data) => {
  await db('categories').insert(data);

  return true;
};
