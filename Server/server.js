const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Database = require("./configuration/Database");
const Router = require("./routes/route");
const port = 4545;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
app.use("/", Router);
Database();
