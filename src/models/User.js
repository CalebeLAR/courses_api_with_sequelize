/**
 * 
 * @param {import('sequelize').Sequelize} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
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
    tableName: 'Users'
  });

  return User;
}