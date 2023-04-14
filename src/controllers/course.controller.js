const courseService = require('../services/course.service');

const getAll = async (_req, res) => {
  const courses = await courseService.getAll();
  res.status(200).json(courses);
}

// const getById = async (req, res) => {
//   const { id } = req.params;
//   const courses = await courseService.getById(id);
//   res.status(200).json(courses);
// }

// lizeLoad
const getById = async (req, res) => {
  const { id } = req.params;
  const { withStudent } = req.query;
  const courses = await courseService.getById(id, withStudent === 'true');
  res.status(200).json(courses);
}

const create = async (req, res) => {
  const course = req.body;
  const createdCourse = await courseService.create(course);
  return res.status(201).json(createdCourse);
};

const update = async (req, res) => {
  const { id } = req.params;
  const course = req.body;
  const courseUpdated = await courseService.update(course, { where: id });
  if (!courseUpdated) return res.status(404).json('course not found');
  return res.status(201).json(courseUpdated);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  await courseService.destroy(id);
  return res.status(201).json('course destroyed')
};
module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy
}