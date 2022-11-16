const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AsanaAPI extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsToMany(User, { through: 'User_AsanaAPIs' });
      // define association here
    }
  }
  AsanaAPI.init({
    sanskrit_name: DataTypes.STRING,
    english_name: DataTypes.STRING,
    img_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'AsanaAPI',
  });
  return AsanaAPI;
};
