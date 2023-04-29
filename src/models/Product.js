/**
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    product: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
  },{
    tableName: 'Products',
    underscored: true,
    timestamps: false,
  });
  return Product;
};