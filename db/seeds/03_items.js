/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  const t = await knex.transaction();

  try {
    await knex('item_options').transacting(t).del();
    await knex('items').transacting(t).del();
    await knex('items').insert([
      {
        // id: 1,
        name: 'Dinay',
        description: 'Ajoyib ichimlik. Ichib rohatlanasiz.',
        category_id: 1, // Ichimliklar
        type: 'good',
        photo: 'https://images.uzum.uz/cfcv71ig84cfbutu356g/original.jpg',
        in_menu: true,
        is_deleted: false,
      },
      {
        // id: 2,
        name: 'Xitoycha shashlik',
        description: 'Xitoycha halol usulda tayyorlangan. Mazza qilasiz.',
        category_id: 2, // Shashliklar
        type: 'food',
        photo: 'https://storage.kun.uz/source/uploads/2016iyulavgust/1chsh1.jpg',
        in_menu: true,
        is_deleted: false,
      },
      {
        // id: 3,
        name: "Ko'za sho'rva",
        description: 'Juda mazali. Tanlovda adashmaysiz.',
        category_id: 3, // Birinchi ovqatlar
        type: 'food',
        photo: 'https://zira.uz/wp-content/uploads/2017/11/hiva-13-shurpa.jpg',
        in_menu: true,
        is_deleted: false,
      },
      {
        // id: 4,
        name: "To'y oshi",
        description: "Juda mazali to'y oshi. Oshni yemabsiz, bu dunyoga kelmabsiz.",
        category_id: 4, // Ikkinchi ovqatlar
        type: 'food',
        photo:
          'https://media.express24.uz/r/848/1500/upload/iblock/08c/08c8e728588d0d77a6654f84eec3ef5d.jpg',
        in_menu: true,
        is_deleted: false,
      },
    ]);
    await knex('item_options').insert([
      {
        // id: 1,
        item_id: 1, // Dinay
        measurement_id: 2, // L
        unit: 1,
        price: 9000,
      },
      {
        // id: 2,
        item_id: 1, // Dinay
        measurement_id: 2, // L
        unit: 0.5,
        price: 5000,
      },
      {
        // id: 3,
        item_id: 2,
        measurement_id: 4, // Dona
        unit: 1,
        price: 10000,
      },
      {
        // id: 4,
        item_id: 3,
        measurement_id: 3, // Portsiya
        unit: 1,
        price: 33000,
      },
      {
        // id: 5,
        item_id: 4, // To'y oshi
        measurement_id: 1, // Kg
        unit: 1,
        price: 40000,
      },
      {
        // id: 6,
        item_id: 4, // To'y oshi
        measurement_id: 3, // Porsiya
        unit: 1,
        price: 27000,
      },
      {
        // id: 7,
        item_id: 4, // To'y oshi
        measurement_id: 3, // Porsiya
        unit: 0.7,
        price: 20000,
      },
    ]);
    await t.commit();
  } catch (error) {
    t.rollback();
    throw error;
  }
};

