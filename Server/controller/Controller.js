const mongoose = require("mongoose");
const usermodel = require("../models/schema");
const schema = async (req, res) => {
  const { name, fullname, email, password,confirmpassword } = req.body;
  const findEmail = await usermodel.findOne({ email: email });
  if (findEmail) {
    alert("email exist")
    res.send({
      message: "Email already exists", status:'failed'
    });
  } else {
    if (
      name &&
      fullname &&
      email &&
      password &&
      confirmpassword
    ) {
      if (password === confirmpassword) {
        try {
          const userRegister = new usermodel({
            name: name,
            fullname: fullname,
            password: password,
            email: email,
            confirmpassword :confirmpassword
          });
          userRegister.save();
          res.send({ message: "user registered successfully",status:'successfull' });
        } catch (error) {
          res.send({ message: error.message, status:'failed' });
        }
      } else {
        res.send({ message: "password & confirm password dont match" });
      }
    } else {
      res.send({ message: "All fields are required" });
    }
  }
};


const schematwo=(req,res)=>{
    const{email,password}=req.body
    usermodel.findOne({email:email},(err,user)=>{
      if(user){
        if(password === user.password){
            res.send({message:"login sucess",user:user})
        }else{
            res.send({message:"wrong credentials"})
        }
     }else{
         res.send("not register")
     }
    })
    

   
}
// app.post("/Login",(req,res)=>{
//   const {email,password} =req.body;
//   User.findone({email:email},(err,user)=>{
//       if(user){
//          if(password === user.password){
//              res.send({message:"login sucess",user:user})
//          }else{
//              res.send({message:"wrong credentials"})
//          }
//       }else{
//           res.send("not register")
//       }
//   })
// });
module.exports = { schema , schematwo }
