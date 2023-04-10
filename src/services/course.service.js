const { Course } = require('../models');

const getAll = async () => {
  const courses = await Course.findAll();
  return courses;
};

const getById = async (id) => {
  const courses = await Course.findByPk(id);
  return courses;
};

module.exports = {
  getAll,
  getById ,
}