import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const editMeasurement = async ({ id, ...changes }) => {
  const existing = await db('measurements').where({ id, is_deleted: false }).first();

  if (!existing) {
    throw new NotFoundError("O'lchov topilmadi.");
  }

  const result = await db('measurements')
    .where({ id })
    .update({ ...changes });

  return result;
};
