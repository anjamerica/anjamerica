const nodemailer = require('nodemailer');
import getConfig from 'next/config'
import { contactUs } from '../utils/mailTemplate/contactUs';
import { application } from '../utils/mailTemplate/application';

const { serverRuntimeConfig } = getConfig()

export const postMail = (req, res) => {

  const { first_name, job_title, name, description, link, mobile_number, email, message } = req.body
  const country_code=req.body.phone_number?req.body.phone_number.country_code:""
  const tell_number=req.body.phone_number?req.body.phone_number.tell_number:""

  const date=new Date().toLocaleString('en-US').split(",")[0]
  
  const contactMail = contactUs(first_name, mobile_number, email, description, message)
  const applicationMail = application(name,email,link,description,date,job_title,country_code,tell_number)

  var transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  
  if (mobile_number && description && message && first_name && email) {

    var mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'Applicant Contact Information',
      html: contactMail
    };
  }


  if (name,email,link,description,date,job_title) {

    var mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'Applicant For Job',
      html: applicationMail
    };
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.status(200).json({ error: "internal server error", status: 500, errorMessage: error })

    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent: ' + info.response, status: 200 })
    }
  });



}


