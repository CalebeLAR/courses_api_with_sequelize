const { Student, Course } = require('../models');

const getAll = async () => {
  const students = await Student.findAll({ include: { model: Course, as: 'course' } });
    return students;
  };

  const getById = async (id) => {
  const student = await Student.findByPk(id);
  return student;
};

const create = async (student) => {
  const createdStudent = await Student.create(student);
  return createdStudent;
};

const update = async (id, student) => {
  const [updatedStudent] = await Student.update(student, { where: id });
  if (!updatedStudent) return null;
  return updatedStudent;
};

const destroy = async (id) => {
  await Student.destroy({ where: { id } });
  return null
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
}