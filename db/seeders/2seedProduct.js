/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        title: 'Донер Box',
        photo: 'shava1.jpeg',
        firstPrice: 500,
        currentPrice: 250,
        userId: 1,
        latitude: 55.715471,
        longitude: 37.900058,
      },
      {
        title: 'Донер в лепешке',
        photo: 'shava2.jpeg',
        firstPrice: 450,
        currentPrice: 225,
        userId: 1,
        latitude: 55.587666,
        longitude: 37.653174,
      },
      {
        title: 'Шаурма BBQ',
        photo: 'shava3.jpeg',
        firstPrice: 400,
        currentPrice: 200,
        userId: 1,
        latitude: 55.722470,
        longitude: 37.438551,
      },
      {
        title: 'Шаурма Сырная',
        photo: 'shava4.jpeg',
        firstPrice: 350,
        currentPrice: 175,
        userId: 2,
        latitude: 55.800507,
        longitude: 37.548447,
      },
      {
        title: 'Шаурма фирменная',
        photo: 'shava5.jpeg',
        firstPrice: 350,
        currentPrice: 175,
        userId: 3,
        latitude: 55.763726,
        longitude: 37.635577,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
