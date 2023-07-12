import db from '../../db/index.js';

export const addMeasurement = async (data) => {
  const result = await db('measurements').insert(data).returning('*');

  return result[0];
};
