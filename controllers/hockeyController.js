const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const getAllData = (req, res) => {
  client.query(`SELECT * FROM sticks`, (err, resp) => {
    if (err) {
      res.send(err);
    } else {
      res.send(resp.rows);
    }
  });
};

const getSingleData = (req, res) => {
  const { flex, curve, ageLevel, price } = req.params;
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
