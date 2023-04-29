/**
 * @param {import('sequelize').Sequelize} sequelize
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
    advertiserId: {
      allowNull: true,
      type: DataTypes.NUMBER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      }
    }
  },{
    tableName: 'Products',
    underscored: true,
    timestamps: false,
  });
  return Product;
};