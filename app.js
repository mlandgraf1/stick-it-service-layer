//import statements
const express = require("express");
const bodyParser = require("body-parser");
const Client = require("pg").Client;
const hockeyRoute = require("./routes");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/stick-it-user-interface"))

//Identify database to connect to in postgres
const client = new Client({
  connectionString: "postgresql://postgres:bluesfan13092@127.0.0.1:5432/stickit"
});

global.client = client;

//Connect to the stickit database created in postgres
//Log database connected message to console if connection to database is successful
//Log connection error message to console if there is an error connecting to database
client
  .connect()
  .then(() => console.log("Database connected!"))
  .catch(err => console.log("error connecting to the database", err));

app.get("/", (req, res) => {
  res.send("This is home page");
});


app.use("/", hockeyRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
