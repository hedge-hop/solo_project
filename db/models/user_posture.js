const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_Posture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Posture }) {
      // this.belongsTo(User),
      // this.belongsTo(Posture);
      // define association here
    }
  }
  User_Posture.init({
    UserID: DataTypes.INTEGER,
    PostureID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User_Posture',
  });
  return User_Posture;
};
