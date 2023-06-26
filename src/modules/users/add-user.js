import db from '../../db/index.js';
import bcrypt from 'bcryptjs';

export const addUser = async (data) => {
  data.password = await bcrypt.hash(data.password, 10);

  await db('users').insert(data);

  return true;
};