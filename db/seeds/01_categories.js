/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('categories').del();
  await knex('categories').insert([
    {
      // id: 1,
      name: 'Ichimliklar',
      is_deleted: false,
    },
    {
      // id: 2,
      name: 'Shakliklar',
      is_deleted: false,
    },
    {
      // id: 3,
      name: 'Birinchi ovqatlar',
      is_deleted: false,
    },
    {
      // id: 4,
      name: 'Ikkinchi ovqatlar',
      is_deleted: false,
    },
    {
      // id: 5,
      name: 'Salatlar',
      is_deleted: false,
    },
  ]);
};

