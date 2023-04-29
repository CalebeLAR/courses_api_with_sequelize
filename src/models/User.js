/**
 * 
 * @param {import('sequelize').Sequelize} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

module.exports = (Sequelize, DataTypes) => {
  const Login = Sequelize.define('Login', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      allowNull: true,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: true,
      type: DataTypes.STRING
    },
    active: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: 'true',
    }
  }, {
    underscored: false,
    tableName: 'Logins'
  });

  return Login;
}