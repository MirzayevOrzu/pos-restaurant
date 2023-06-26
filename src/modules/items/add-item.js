import db from '../../db/index.js';

export const addItem = async (data) => {
  await db('items').insert(data);

  return true;
};
