/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('item_options', (table) => {
    table.increments('id');
    table.integer('item_id').references('id').inTable('items');
    table.integer('measurement_id').references('id').inTable('measurements');
    table.float('unit', 2, 1).defaultTo(1);
    table.float('price', 10, 2);
    table.boolean('is_deleted').defaultTo(false);
    table.timestamps(true, true);

    table.unique(['item_id', 'measurement_id', 'unit'], { indexName: 'item_unique_option' });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('item_options');
};

