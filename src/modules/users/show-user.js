import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showUser = async ({ id }) => {
  const user = await db('users').where({ id }).first();

  if (!user) {
    throw new NotFoundError('Foydalanuvchi topilmadi.');
  }

  return user;
};
