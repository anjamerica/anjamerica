import { sendEmail } from "../utils/emailUtil";
import { contactUsMailValidator } from "../utils/validators/contactUsMail.validator";

export const contactUsMailController = async (req, res) => {
  try {
    let {
      first_name,
      last_name,
      description,
      country_code,
      mobile_number,
      email,
    } = req.body;

    const validator = contactUsMailValidator(req?.body);

    if (!validator?.success) {
      res.status(400).send(validator);
    }

    //send mail to admin
    const mailOptions = {
      to: process.env.MAIL_TO,
      subject: "Applicant contact information",
      templatePath: "/utils/mailTemplate/contactUsTemplate.ejs",
      content: {
        name: `${first_name} ${last_name}`,
        message: description,
        phone_number: `+${country_code || "91"} ${mobile_number}`,
        email,
      },
    };
    await sendEmail(mailOptions);

    res.send("Email sent successfully");
  } catch (error) {
    console.log(error, "contactUsMailController");
    res.status(500).send("Internal server error");
  }
};
