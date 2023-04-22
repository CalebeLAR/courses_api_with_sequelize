'use strict'
/**
 * @param {import('sequelize').Sequelize } sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const CourseModule = sequelize.define('CourseModule', {  },
  {
    timestamps: false,
    tableName: 'courses_modules',
    underscored: true
  });

  CourseModule.associate = (model) => {
    const { Course, Module } = model

    Course.belongsToMany(model.Module, {
      foreignKey: 'idCourse',
      otherKey: 'idModule',
      as: 'modules',
      through: CourseModule
    });

    Module.belongsToMany(model.Course, {
      foreignKey: 'idCourse',
      otherKey: 'idModule',
      as: 'courses',
      through: CourseModule
    });
  };

  return CourseModule;
};