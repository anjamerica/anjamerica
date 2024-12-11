import { mailTransporter } from '../config/mailConfig';
const ejs = require('ejs');

export const sendEmailTemplate = ({
  receivers,
  content,
  subject,
  templatePath,
}) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(
      __dirname + templatePath,
      { receivers, content },
      (err, data) => {
        if (err) {
          console.log(err, 'error from sendEmailTemplate');
          reject([]);
        } else {
          const promises = receivers.map((receiver) => {
            var mailOptions = {
              from: process.env.FROM_USER,
              to: receiver,
              subject: subject,
              html: data,
            };
            return (
              new Promise() <
              string >
              ((resolve, reject) => {
                mailTransporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                    console.log(error, 'Error from sendMail');
                    reject(error);
                  } else {
                    console.log('Email sent successfully');
                    resolve(receiver);
                  }
                });
              })
            );
          });

          Promise.all(promises)
            .then((results) => {
              const successfulEmails = results.filter((email) => email !== '');
              resolve(successfulEmails);
            })
            .catch((error) => {
              console.log(error);
              reject([]);
            });
        }
      }
    );
  });
};

export const sendEmail = ({ to, cc, bcc, content, subject, templatePath }) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(
        process.cwd() + templatePath,
      { content },
      (err, html) => {
        if (err) {
          console.log(err, 'error from sendEmailTemplate');
          return reject(err);
        } else {
          let mailOptions = {
            from: process.env.MAIL_FROM,
            to,
            subject,
            html,
            bcc,
            cc,
          };

          mailTransporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error, 'Error from sendMail');
             return  reject(error);
            } else {
              console.log('Email sent successfully');
              return resolve(info);
            }
          });
        }
      }
    );
  });
};
