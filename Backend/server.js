const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const emailTemplate = require('./emailTemplate');
const nodemailer = require('nodemailer');

const app = express();

dotenv.config();

const { PORT, HOST, USER, PASS } = process.env;
console.log(USER);
console.log(PASS);

app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.post('/businessRegistration', (req, res) => {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: USER,
      pass: PASS,
    },
  });

  let mailOptions = {
    from: USER,
    to: req.body.email,
    subject: 'Business Registered Successfully',
    html: emailTemplate(req.body),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send({ error: 'Error sending email' });
    } else {
      console.log(info);
      res.status(200).send({ message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`APP RUNNING ON ${HOST}:${PORT}`);
});
