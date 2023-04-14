const express = require('express');

const studentController = require('../controllers/student.controller');

const studentRoute = express.Router();

studentRoute.get('/', studentController.getAll);
studentRoute.get('/:id', studentController.getById);
studentRoute.post('/student', studentController.create);
studentRoute.put('/student/:id', studentController.update);
studentRoute.delete('/student/:id', studentController.destroy);

module.exports = {  
  studentRoute,
};