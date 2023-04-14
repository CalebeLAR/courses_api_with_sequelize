/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    idCourse: DataTypes.INTEGER
  },
  {
    tableName: 'students',
    underscored: true,
    timestamps: false
  });
  Student.associate = (model) => {
    Student.belongsTo(model.Course, {
      foreignKey: 'idCourse',
      as: 'course'
    })
  }

  return Student;
}