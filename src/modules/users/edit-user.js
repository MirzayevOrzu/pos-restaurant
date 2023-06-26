import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';
import bcrypt from 'bcryptjs';

export const editUser = async ({ id, ...changes }) => {
  const existing = await db('users').where({ id, is_deleted: false }).first();

  if (!existing) {
    throw new NotFoundError('Foydanuvchi topilmadi.');
  }

  if (changes.password) {
    changes.password = await bcrypt.hash(changes.password);
  }

  const result = await db('users')
    .where({ id })
    .update({ ...changes });

  return result;
};
