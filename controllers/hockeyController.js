//import statements
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const getAllData = (req, res) => {
  //This SQL query will return all sticks currently stored in the database
  client.query(`SELECT * FROM sticks`, (err, resp) => {
    if (err) {
      res.send(err);
    } else {
      res.send(resp.rows);
    }
  });
};

const getSingleData = (req, res) => {
  //required parameters to be sent in a SQL query
  const { flex, curve, ageLevel, price } = req.params;
  //SQL query to be sent with parameters flex, curve, ageLevel, price
  client.query(
    `SELECT * FROM sticks WHERE flex::text like '%${flex}%' AND curve::text like '%${curve}%' AND ageLevel::text like '%${ageLevel}%' AND price::text like '%${price}%'`,
    (err, resp) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(resp.rows);
      }
    }
  );
};

module.exports.getAllData = getAllData;
module.exports.getSingleData = getSingleData;
