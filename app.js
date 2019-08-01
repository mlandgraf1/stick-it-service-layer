const express = require("express");
const bodyParser = require("body-parser");
const Client = require("pg").Client;
const hockeyRoute = require("./routes");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const client = new Client({
  connectionString: "postgresql://postgres:bluesfan13092@127.0.0.1:5432/stickit"
});

global.client = client;

client
  .connect()
  .then(() => console.log("Database connected!"))
  .catch(err => console.log("error connecting to the database", err));

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.use("/", hockeyRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("server is running..."));