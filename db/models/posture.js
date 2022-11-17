const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, User, User_Posture }) {
      this.belongsToMany(Category, { through: 'Posture_Category', foreignKey: 'PostureID' });
      this.belongsToMany(User, { through: 'User_Posture', foreignKey: 'PostureID' });
      // define association here
    }
  }
  Posture.init({
    sanskrit_name: DataTypes.STRING,
    english_name: DataTypes.STRING,
    img_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Posture',
  });
  return Posture;
};
