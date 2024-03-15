const nodemailer = require("nodemailer");

const { EMAIL_USER, EMAIL_PASSWORD, EMAIL_FROM, EMAIL_NAME } = process.env;

const sendEmail = async (options) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  });
  const message = {
    from: `${EMAIL_NAME} <${EMAIL_FROM}>`,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };
  await transport.sendMail(message, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendEmail };
