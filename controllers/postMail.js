const nodemailer = require('nodemailer');
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()



 export const postMail=(req,res)=>{

  console.log(req.body)
  console.log("hiii");


 const{first_name,job_title,name,description,link,mobile_number,email,message}=req.body

      

      var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "6627641d96434f",
          pass: "955834789614ab"
        }
      });

      // var transporter = nodemailer.createTransport({
      //   host: "smtp.sendgrid.net",
      //   port: 465,
      //   auth: {
      //     user: "apikey",
      //     pass: "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"
      //   }
      // });

      if(mobile_number&&description&&message&&first_name&&email){
       
      var mailOptions = {
        from: 'fayiz@anjamerica.com',
        to: 'fayizaravankara@gmail.com',
        subject: 'Applicant Question',
        text: first_name +' job applied successfully'
      };
    }
    

    if(name || job_title){
       
      var mailOptions = {
        from: 'fayiz@anjamerica.com',
        to: 'fayizaravankara@gmail.com',
        subject: 'Applicant for job',
        text: name +' job applied '+job_title+" position"
      };
    }
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return res.status(200).json({error:"internal server error",status:500,errorMessage:error})
          
        } else {
          console.log('Email sent: ' + info.response);
          return res.status(200).json({message:'Email sent: ' +info.response,status:200})
        }
      });



}


