const express = require('express');

const courseController = require('../controllers/course.controller');

const courseRoute = express.Router();

courseRoute.get('/', courseController.getAll);
courseRoute.get('/:id', courseController.getById);

module.exports = {  
  courseRoute,
};