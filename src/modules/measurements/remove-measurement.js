import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeMeasurement = async ({ id }) => {
  const measurement = await db('measurements').where({ id }).first();

  if (!measurement) {
    throw new NotFoundError("O'lchov topilmadi.");
  }

  const result = await db('measurements').where({ id }).update({ is_deleted: true }).returning('*');

  return result[0];
};
