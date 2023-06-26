/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('measurements').del();
  await knex('measurements').insert([
    {
      // id: 1,
      name: 'Kg',
      inc_by: 0.5,
      is_deleted: false,
    },
    {
      // id: 2,
      name: 'L',
      inc_by: 1,
      is_deleted: false,
    },
    {
      // id: 3,
      name: 'Porsiya',
      inc_by: 1,
      is_deleted: false,
    },
    {
      // id: 4,
      name: 'Dona',
      inc_by: 1,
      is_deleted: false,
    },
  ]);
};

