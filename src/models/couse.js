'use strict';
// const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      name: DataTypes.STRING,
      descripiton: DataTypes.STRING,
      creation_date: DataTypes.DATE,
      active: DataTypes.BOOLEAN,
      duration: DataTypes.INTEGER,
    });

  return Course;
};