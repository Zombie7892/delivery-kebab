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
      },
      {
        title: 'Донер в лепешке',
        photo: 'shava2.jpeg',
        firstPrice: 450,
        currentPrice: 225,
        userId: 1,
      },
      {
        title: 'Шаурма BBQ',
        photo: 'shava3.jpeg',
        firstPrice: 400,
        currentPrice: 200,
        userId: 1,
      },
      {
        title: 'Шаурма Сырная',
        photo: 'shava4.jpeg',
        firstPrice: 350,
        currentPrice: 175,
        userId: 2,
      },
      {
        title: 'Шаурма фирменная',
        photo: 'shava5.jpeg',
        firstPrice: 350,
        currentPrice: 175,
        userId: 3,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
