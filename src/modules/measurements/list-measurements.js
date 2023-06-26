import db from '../../db/index.js';

export const listMeasurements = async () => {
  const dbQuery = db('measurements').where({ is_deleted: false }).select('*');

  const count = await dbQuery.clone().count().groupBy('id');
  const measurements = await dbQuery;

  return {
    count: count.length,
    list: measurements,
  };
};
