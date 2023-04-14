const studentService = require('../services/student.service');

const getAll = async (_req, res) => {
  const students = await studentService.getAll();
  res.status(200).json(students);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const students = await studentService.getById(id);
  res.status(200).json(students);
}

const create = async (req, res) => {
  const student = req.body;
  const createdstudent = await studentService.create(student);
  return res.status(201).json(createdstudent);
};

const update = async (req, res) => {
  const { id } = req.params;
  const student = req.body;
  const studentUpdated = await studentService.update(student, { where: id });
  if (!studentUpdated) return res.status(404).json('student not found');
  return res.status(201).json(studentUpdated);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  await studentService.destroy(id);
  return res.status(201).json('student destroyed')
};
module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy
}