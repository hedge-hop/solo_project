'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sequence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sequence.init({
    UserID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    pos1: DataTypes.STRING,
    pos2: DataTypes.STRING,
    pos3: DataTypes.STRING,
    pos4: DataTypes.STRING,
    pos5: DataTypes.STRING,
    pos6: DataTypes.STRING,
    pos7: DataTypes.STRING,
    pos8: DataTypes.STRING,
    pos9: DataTypes.STRING,
    pos10: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sequence',
  });
  return Sequence;
};