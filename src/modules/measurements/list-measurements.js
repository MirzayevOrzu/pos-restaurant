import db from '../../db/index.js';

export const listMeasurements = async () => {
  const dbQuery = db('measurements').where({ is_deleted: false }).select('*');

  const measurements = await dbQuery;

  return measurements;
};
