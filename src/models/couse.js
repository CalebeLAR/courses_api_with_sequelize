'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Couse', {
      name: DataTypes.STRING,
      descripiton: DataTypes.STRING,
      creation_date: DataTypes.DATE,
      active: DataTypes.BOOLEAN
    });

  return Course;
};