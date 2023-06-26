import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showMeasurement = async ({ id }) => {
  const measurement = await db('measurements').where({ id, is_deleted: false }).first();

  if (!measurement) {
    throw new NotFoundError("O'lchov topilmadi.");
  }

  return measurement;
};
