const express = require('express');

const courseController = require('../controllers/course.controller');

const courseRoute = express.Router();

courseRoute.get('/', courseController.getAll);
courseRoute.get('/:id', courseController.getById);
courseRoute.post('/course', courseController.create);
courseRoute.put('/course/:id', courseController.update);
courseRoute.delete('/course/:id', courseController.destroy);

module.exports = {  
  courseRoute,
};