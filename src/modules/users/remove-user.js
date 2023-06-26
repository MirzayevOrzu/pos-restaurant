import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeUser = async ({ id }) => {
  const user = await db('users').where({ id }).first();

  if (!user) {
    throw new NotFoundError('Foydalanuvchi topilmadi.');
  }

  const result = await db('users').where({ id }).update({ is_deleted: true });

  return result;
};
