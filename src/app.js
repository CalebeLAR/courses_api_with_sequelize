const express = require('express');
const { courseRoute } = require('./routes');
const { studentRoute } = require('./routes');

const app = express();

app.use(express.json())
app.use('/courses', courseRoute);
app.use('/students', studentRoute);

module.exports = app;