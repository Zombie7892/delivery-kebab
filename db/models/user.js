const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: 'userId' });
      this.hasMany(models.Order, { foreignKey: 'userId' });
    } 
  }
  User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    number: DataTypes.STRING,
    seller: DataTypes.BOOLEAN,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
