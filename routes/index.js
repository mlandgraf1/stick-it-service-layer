//import statements
const express = require("express");
const bodyParser = require('body-parser');
const getAllData = require("../controllers/hockeyController").getAllData;
const getSingleData = require("../controllers/hockeyController").getSingleData

const app = express();
app.use(bodyParser.json());

app.get('/hockey', getAllData);
app.get('/hockey/:flex/:curve/:ageLevel/:price', getSingleData)

module.exports = app;