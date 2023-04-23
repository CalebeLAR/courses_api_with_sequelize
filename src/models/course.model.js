'use strict';
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes 
 */


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
      tableName: 'courses',
      timestamps: true,
      underscored: true,
    });

    Course.associate = (model) => {
      Course.hasMany(model.Student, {
        foreignKey: 'idCourse',
        as: 'students'
      })
    };


  return Course;
};