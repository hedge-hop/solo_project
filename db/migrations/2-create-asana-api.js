/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AsanaAPIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sanskrit_name: {
        type: Sequelize.STRING,
      },
      english_name: {
        type: Sequelize.STRING,
      },
      img_url: {
        type: Sequelize.STRING,
      },
      /* category_id: {
        type: Sequelize.INTEGER,
      }, */
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
    await queryInterface.dropTable('AsanaAPIs');
  },
};
