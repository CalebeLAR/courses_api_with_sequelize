const { Course } = require('../models');

const getAll = async () => {
  const courses = await Course.findAll();
  return courses;
};

const getById = async (id) => {
  const courses = await Course.findByPk(id);
  return courses;
};

const create = async (course) => {
  const createdCourse = await Course.create(course);
  return createdCourse;
};

const update = async (id, course) => {
  const [updatedCourse] = await Course.update(course, { where: id });
  if (!updatedCourse) return null;
  return course;
};

const destroy = async (id) => {
  await Course.destroy({ where: id });
  return null
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
}