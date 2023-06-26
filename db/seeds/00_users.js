import bcrypt from 'bcryptjs';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('users').del();
  await knex('users').insert([
    {
      // id: 1,
      first_name: 'Faith',
      last_name: 'Greene',
      username: 'faith',
      password: bcrypt.hashSync('foobar'),
      is_deleted: false,
    },
    {
      // id: 2,
      first_name: 'Samantha',
      last_name: 'Roberts',
      username: 'samantha',
      password: bcrypt.hashSync('foobar'),
      is_deleted: false,
    },
    {
      // id: 3,
      first_name: 'Luke',
      last_name: 'Mitchell',
      username: 'luke',
      password: bcrypt.hashSync('foobar'),
      is_deleted: false,
    },
  ]);
};
