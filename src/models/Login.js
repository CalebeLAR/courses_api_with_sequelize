/**
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


module.exports = (Sequelize, DataTypes) => {
  const Login = Sequelize.define('Login', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: true,
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING,
    }
  }, {
    underscored: false,
    tableName: 'Logins'
  });

  return Login;
}