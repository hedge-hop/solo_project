const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_AsanaAPIs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, AsanaAPI }) {
      // define association here
    }
  }
  User_AsanaAPIs.init({
    UserID: DataTypes.INTEGER,
    AsanaAPIID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User_AsanaAPIs',
  });
  return User_AsanaAPIs;
};
