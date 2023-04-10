const express = require('express');
const { courseRoute } = require('./routes');

const app = express();

app.use(express.json())
app.use(courseRoute);

module.exports = app;