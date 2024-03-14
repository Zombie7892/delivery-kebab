/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        productId: 1,
        userId: 2,
      },
      {
        productId: 2,
        userId: 4,
      },
      {
        productId: 3,
        userId: 6,
      },
      {
        productId: 4,
        userId: 2,
      },
      {
        productId: 5,
        userId: 2,
      },
      {
        productId: 6,
        userId: 8,
      },
      {
        productId: 7,
        userId: 6,
      },
      {
        productId: 8,
        userId: 4,
      },
      {
        productId: 9,
        userId: 6,
      },
      {
        productId: 10,
        userId: 6,
      },
      {
        productId: 11,
        userId: 6,
      },
      {
        productId: 12,
        userId: 6,
      },
      {
        productId: 13,
        userId: 8,
      },
      {
        productId: 14,
        userId: 8,
      },
      {
        productId: 15,
        userId: 8,
      },
      {
        productId: 16,
        userId: 8,
      },
      {
        productId: 17,
        userId: 10,
      },
      {
        productId: 20,
        userId: 10,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
