/**
 * @param {import('sequelize-cli').Migration}
 * @param {import('sequelize').QueryInterface} queryInterface
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Logins',{
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      userName: {
        field: 'user_name',
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    }, {
      underscored: false,
      tableName: 'Logins'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Logins');
  }
};