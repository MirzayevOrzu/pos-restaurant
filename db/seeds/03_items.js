/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del();
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
      category_id: 3, // Shashliklar
      type: 'food',
      photo: 'https://zira.uz/wp-content/uploads/2017/11/hiva-13-shurpa.jpg',
      in_menu: true,
      is_deleted: false,
    },
  ]);
};

