const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        login: 'Владислав',
        password: await bcrypt.hash('123', 10),
        email: '1@1.com',
        seller: true,
        number: '+79093895319',
        latitude: 55.797381,
        longitude: 37.802610,
      },
      {
        login: 'Мастурбек',
        password: await bcrypt.hash('123', 10),
        email: '2@2.com',
        seller: false,
        number: '+79871272542',
        latitude: 55.677562,
        longitude: 37.774350,
      },
      {
        login: 'Роман',
        password: await bcrypt.hash('123', 10),
        email: '3@3.com',
        seller: true,
        number: '+79604944043',
        latitude: 55.554084,
        longitude: 37.467014,
      },
      {
        login: 'Ромаджан',
        password: await bcrypt.hash('123', 10),
        email: '4@4.com',
        seller: false,
        number: '+79749847781',
        latitude: 55.723970,
        longitude: 37.575452,
      },
      {
        login: 'Дмитрий',
        password: await bcrypt.hash('123', 10),
        email: '5@5.com',
        seller: true,
        number: '+79072667575',
        latitude: 55.846770,
        longitude: 37.356111,
      },
      {
        login: 'Света',
        password: await bcrypt.hash('123', 10),
        email: '6@6.com',
        seller: false,
        number: '+79495782592',
        latitude: 55.850605,
        longitude: 37.427457,
      },
      {
        login: 'Вася',
        password: await bcrypt.hash('123', 10),
        email: '7@7.com',
        seller: true,
        number: '+79707001714',
        latitude: 55.732456,
        longitude: 37.469766,
      },
      {
        login: 'Шокирджон',
        password: await bcrypt.hash('123', 10),
        email: '8@8.com',
        seller: false,
        number: '+79653773612',
        latitude: 55.763017,
        longitude: 37.628262,
      },
      {
        login: 'Темирлан',
        password: await bcrypt.hash('123', 10),
        email: '9@9.com',
        seller: true,
        number: '+79946014950',
        latitude: 55.763017,
        longitude: 37.628262,
      },
      {
        login: 'Тимати',
        password: await bcrypt.hash('123', 10),
        email: '10@10.com',
        seller: false,
        number: '+79137901375',
        latitude: 55.556164,
        longitude: 37.699218,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
