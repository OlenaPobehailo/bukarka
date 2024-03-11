const nodemailer = require("nodemailer");
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (subject, message, send_to) => {
  const options = {
    from: EMAIL_USER,
    to: send_to,
    subject: subject,
    text: message,
  };
  transporter
    .sendMail(options)
    .then((info) => console.log(info))
    .then((err) => console.log(err));
};

module.exports = { sendEmail };
