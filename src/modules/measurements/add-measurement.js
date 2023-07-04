import db from '../../db/index.js';

export const addMeasurement = async (data) => {
  const result = await db('measurements').insert(data);

  return result[0];
};
