import db from '../../db/index.js';

export const addMeasurement = async (data) => {
  await db('measurements').insert(data);

  return true;
};
