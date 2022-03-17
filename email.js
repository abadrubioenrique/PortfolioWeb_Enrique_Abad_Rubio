require ('dotenv').config();
const nodemailer = require ("nodemailer");
var express = require ("express");
var app = express();

app.post("/send-mail",(req,res)=>{
  //Step 1
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:process.env.EMAIL,
      pass:process.env.PASSWORD
    },
  });
  //Step 2
  let mailOptions = {
    from: process.env.EMAIL,
    to: "enrock1998@gmail.com",
    subject: "Enviado desde nodemailer",
    text: "Hola mundo"
  }
  //Step 3
  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      res.status(500).send(error.message);
    }else{
      console.log("Email enviado");
      res.status(200).jsonp(req.body);
    }
    });
});

app.listen(3000,()=>{
  console.log("Servidor en ->http://localhost:3000");
});