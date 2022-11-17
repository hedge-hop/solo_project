/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: 1,
      firstname: 'Goga',
      lastname: 'Giga',
      cellphone: '89854155558',
      email: 'giga.g@mail.ru',
      password: '$2b$10$qIEJkMoeKSBUkFPrblyNmOffuCZooLao87UeT8RPCaDVBSEO1UdyK',
      createdAt: '2018-07-01T04:32:02.971Z',
      updatedAt: '2018-07-01T04:32:02.971Z',
    },
    {
      id: 2,
      firstname: 'Kalee',
      lastname: 'Yuga',
      cellphone: '89994166611',
      email: 'Kalee@yuga.com',
      password: '$2b$10$qIEJkMoeKSBUkFPrblyNmOffuCZooLao87UeT8RPCaDVBSEO1UdyK',
      createdAt: '2018-07-01T04:32:02.971Z',
      updatedAt: '2018-07-01T04:32:02.971Z',
    },
    {
      id: 3,
      firstname: 'Biba',
      lastname: 'Boba',
      cellphone: '89854166667',
      email: 'biba@boba.b',
      password: '$2b$10$qIEJkMoeKSBUkFPrblyNmOffuCZooLao87UeT8RPCaDVBSEO1UdyK',
      createdAt: '2018-07-01T04:32:02.971Z',
      updatedAt: '2018-07-01T04:32:02.971Z',
    },
    {
      id: 4,
      firstname: 'Marusya',
      lastname: 'Ma',
      cellphone: '89854155558',
      email: 'marusya@m.m',
      password: '$2b$10$qIEJkMoeKSBUkFPrblyNmOffuCZooLao87UeT8RPCaDVBSEO1UdyK',
      createdAt: '2018-07-01T04:32:02.971Z',
      updatedAt: '2018-07-01T04:32:02.971Z',
    },
    {
      id: 5,
      firstname: 'Lin',
      lastname: 'Baba',
      cellphone: '89994166611',
      email: 'lin@ba.ba',
      password: '$2b$10$qIEJkMoeKSBUkFPrblyNmOffuCZooLao87UeT8RPCaDVBSEO1UdyK',
      createdAt: '2018-07-01T04:32:02.971Z',
      updatedAt: '2018-07-01T04:32:02.971Z',
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
