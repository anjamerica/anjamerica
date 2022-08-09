const nodemailer = require('nodemailer');
import getConfig from 'next/config'
import { contactUs } from '../utils/mailTemplate/contactUs';
import { application } from '../utils/mailTemplate/application';
import validator from 'validator';
import { errors, success } from '../utils/responds';
import subscriber from "../models/subscribers";
import subscribers from '../models/subscribers';


const { serverRuntimeConfig } = getConfig()
var transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  pool: true,
  maxConnections: 1,
  rateDelta: 20000,
  rateLimit: 5,
});

export const contactUsMailController = (req, res) => {
  let { first_name, description, mobile_number, email, message } = req.body
  const result = validator.isMobilePhone(mobile_number)
  if (result == false) res.status(400).json(errors({ status: 400, errorMessage: 'phone_number validation error' }))
  const contactMail = contactUs(first_name, mobile_number, email, description, message)
  var mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: 'Applicant Contact Information',
    html: contactMail
  };

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
    return res.status(500).json(error({ status: 500, errorMessage: 'Internal Server Error', error: error.message }))
  } else {
    console.log('Email sent: ' + info.response);
    return res.status(200).json(success({ successMessage: "Email Sent Successfully", status: 200 }))
  }
})
}


export const applicationMailController = (req, res) => {
  let { name, email, link, description, job_title } = req.body
  let { country_code, tell_number } = req.body.phone_number
  const result = validator.isMobilePhone(tell_number)
  if (result == false) res.status(400).json(errors({ status: 400, errorMessage: 'phone_number validation error' }))
  const date = new Date().toLocaleString('en-US').split(",")[0]
  const applicationMail = application(name, email, link, description, date, job_title, country_code, tell_number)
  var mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: 'Applicant For Job',
    html: applicationMail
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.status(500).json(errors({ status: 500, errorMessage: 'Internal Server Error', error: error.message }))
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json(success({ successMessage: "Email Sent Successfully", status: 200 }))
    }
  })
}
export const neawsLetterMail=async (req,res)=>{
  const query=[
    { $project : { email : 1,_id:0 }}
  ]
  const emails=await subscribers.aggregate(query)
 // console.log(typeof(emails));
  emails.forEach(email => {
    for (let key in email) {
        console.log(email[key]);
        var mailOptions = {
          from: process.env.MAIL_FROM,
          to: email[key],
          subject: 'Neaws Letter',
          text: "hhhh"
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            return res.status(500).json(errors({ status: 500, errorMessage: 'Internal Server Error', error: error.message }))
          } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).json(success({ successMessage: "Email Sent Successfully", status: 200 }))
          }
        })
    }
  });
 
    

}
