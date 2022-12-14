const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Posture }) {
      this.belongsToMany(Posture, { through: 'Posture_Category', foreignKey: 'CategoryID' });
      // define association here
    }
  }
  Category.init({
    name: DataTypes.STRING,
    short_name: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
