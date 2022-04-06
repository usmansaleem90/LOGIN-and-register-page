const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  name: { type: String, required: true },
  fullname: { type: String, required: true },
  email: { type: String, unique: true, required:true },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true },
});

const usermodel = mongoose.model("usermodel", userschema);
module.exports = usermodel;
