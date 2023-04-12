'use strict';

module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      creation_date: DataTypes.DATE,
      active: DataTypes.BOOLEAN,
      duration: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      tableName: 'courses'
    });

  return Course;
};