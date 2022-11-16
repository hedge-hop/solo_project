/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_AsanaAPIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      AsanaAPIID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'AsanaAPIs',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_AsanaAPIs');
  },
};
