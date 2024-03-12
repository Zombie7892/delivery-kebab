const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        login: 'User1',
        password: await bcrypt.hash('123', 10),
        email: '1@1.com',
        seller: true,
        number: '+71111111111',
      },
      {
        login: 'User2',
        password: await bcrypt.hash('123', 10),
        email: '2@2.com',
        seller: false,
        number: '+72222222222',
      },
      {
        login: 'User3',
        password: await bcrypt.hash('123', 10),
        email: '3@3.com',
        seller: true,
        number: '+7333333333',
      },
      {
        login: 'User4',
        password: await bcrypt.hash('123', 10),
        email: '4@4.com',
        seller: false,
        number: '+7444444444',
      },
      {
        login: 'User5',
        password: await bcrypt.hash('123', 10),
        email: '5@5.com',
        seller: true,
        number: '+7555555555',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
