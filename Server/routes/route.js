const express = require("express");
const Router = express.Router();
const { schema ,schematwo} = require("../controller/Controller");
Router.post("/register", schema);
Router.post("/login", schematwo);
module.exports = Router;
