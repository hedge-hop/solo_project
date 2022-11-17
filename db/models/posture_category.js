const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posture_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posture_Category.init({
    PostureID: DataTypes.INTEGER,
    CategoryID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Posture_Category',
  });
  return Posture_Category;
};
