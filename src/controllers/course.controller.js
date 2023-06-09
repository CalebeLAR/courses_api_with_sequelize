const courseService = require('../services/course.service');

const getAll = async (_req, res) => {
  const courses = await courseService.getAll();
  res.status(200).json(courses);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const courses = await courseService.getById(id);
  res.status(200).json(courses);
}
module.exports = {
  getAll,
  getById,
}