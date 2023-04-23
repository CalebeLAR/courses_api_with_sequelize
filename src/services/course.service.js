const { Course, Student, Module } = require('../models');

const getAll = async () => {
  const courses = await Course.findAll(
    {
      include: [
        { model: Student, as: 'students' },
        { model: Module, as: 'modules', through: { attributes: [] } }
      ]
    }
  );
  return courses;
};

// const getById = async (id) => {
//   const courses = await Course.findByPk(id);
//   return courses;
// };

const getById = async (id, withStudents = true) => {
  const courses = await Course.findByPk(id);
  if (withStudents) {
    const students = await courses.getStudents()
    courses.dataValues.students = students;
  };
  return courses;
};

// criando um curso com todos os metodos necessários:
const create = async (
  {
    name,
    description,
    creation_date,
    active,
    duration,
    modules
  }) => {
  const createdCourse = await Course.create(
    {name, description,creation_date, active, duration}
    );
  const arrModules = modules.map(module => Module.create(module))
  
  createdCourse.dataValues.modules = await Promise.all(arrModules);
  return createdCourse;
};

const update = async (id, course) => {
  const [updatedCourse] = await Course.update(course, { where: id });
  if (!updatedCourse) return null;
  return course;
};

const destroy = async (id) => {
  await Course.destroy({ where: { id } });
  return null
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
}