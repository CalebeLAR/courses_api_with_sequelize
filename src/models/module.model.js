'use strict';
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define('Module', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.DECIMAL,
    qtblock: DataTypes.DECIMAL
  }, {
    tableName: 'modules',
    timestamps: false,
  });

  return Module;
};