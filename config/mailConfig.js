import nodemailer from "nodemailer"

if(!process.env.MAIL_USER || !process.env.MAIL_HOST || !process.env.MAIL_PASS|| !process.env.MAIL_PORT) throw new Error("MAIL CONFIGURATION ENV IS NOT FOUND")

    export const  mailTransporter = nodemailer.createTransport({
      host:process.env.MAIL_HOST,
      port:parseInt(process.env.MAIL_PORT),
      debug: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });