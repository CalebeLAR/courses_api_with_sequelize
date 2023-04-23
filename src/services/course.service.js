const { Course, Student, Module, sequelize } = require('../models');

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
  { name, description, creation_date, active, duration, modules}
  ) => {
  try {
    return await sequelize.transaction( async (t) => {
      const createdCourse = await Course.create(
        {name, description,creation_date, active, duration},
        {transaction: t}
        );
      const arrPromiseModules = modules.map(m => Module.create(m, {transaction: t}))
      const arrModules = await Promise.all(arrPromiseModules);

      await createdCourse.addModules(arrModules, {transaction: t})
      createdCourse.dataValues.modules = arrModules;
      return createdCourse;
    });
  } catch (err) {
    return err

  }
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