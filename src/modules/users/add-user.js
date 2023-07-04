import db from '../../db/index.js';
import bcrypt from 'bcryptjs';

export const addUser = async (data) => {
  data.password = await bcrypt.hash(data.password, 10);

  const result = await db('users').insert(data).returning('*');

  return result[0];
};
