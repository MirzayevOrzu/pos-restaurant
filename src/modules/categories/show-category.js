import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showCategory = async ({ id }) => {
  const category = await db('categories').where({ id }).first();

  if (!category) {
    throw new NotFoundError('Turkum topilmadi.');
  }

  return category;
};
