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
//   const flex = parseInt(req.params.flex, 10);
// const curve = req.params.curve;
const flex = parseInt(req.params.flex, 10);
  client.query(
    `SELECT * FROM sticks WHERE flex = ${flex}`,
    (err, resp) => {
      if (err) {
        res.send({error: err});
      } else {
        res.send(resp.rows);
      }
    }
  );
};

module.exports.getAllData = getAllData;
module.exports.getSingleData = getSingleData;