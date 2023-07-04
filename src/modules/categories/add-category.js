import db from '../../db/index.js';

export const addCategory = async (data) => {
  const result = await db('categories').insert(data);

  return result[0];
};
