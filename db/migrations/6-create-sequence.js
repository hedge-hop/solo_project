/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sequences', {
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
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      pos1: {
        type: Sequelize.STRING,
      },
      pos2: {
        type: Sequelize.STRING,
      },
      pos3: {
        type: Sequelize.STRING,
      },
      pos4: {
        type: Sequelize.STRING,
      },
      pos5: {
        type: Sequelize.STRING,
      },
      pos6: {
        type: Sequelize.STRING,
      },
      pos7: {
        type: Sequelize.STRING,
      },
      pos8: {
        type: Sequelize.STRING,
      },
      pos9: {
        type: Sequelize.STRING,
      },
      pos10: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Sequences');
  },
};
