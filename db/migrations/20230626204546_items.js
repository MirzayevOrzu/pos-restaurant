/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id');
    table.string('name', 50);
    table.string('description');
    table.integer('category_id').references('id').inTable('categories');
    table.enum('type', ['food', 'good']);
    table.string('photo');
    table.boolean('in_menu').defaultTo(false);
    table.boolean('is_deleted').defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('items');
};

