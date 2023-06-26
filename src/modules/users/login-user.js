import db from '../../db/index.js';
import { NotFoundError, UnauthorizedError } from '../../shared/errors/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../shared/config/index.js';

export const loginUser = async ({ username, password }) => {
  const existing = await db('users').where({ username, is_deleted: false }).first();

  if (!existing) {
    throw new NotFoundError('Foydalanuvchi topilmadi.');
  }

  const match = await bcrypt.compare(password, existing.password);

  if (!match) {
    throw new UnauthorizedError('Login yoki parol xato.');
  }

  const token = jwt.sign({ user: { id: existing.id } }, config.jwt.secret);

  return { token };
};
