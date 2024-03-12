/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        productId: 1,
        userId: 1,
      },
      {
        productId: 2,
        userId: 2,
      },
      {
        productId: 3,
        userId: 2,
      },
      {
        productId: 4,
        userId: 3,
      },
      {
        productId: 5,
        userId: 3,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
