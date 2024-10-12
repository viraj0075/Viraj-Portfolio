import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.VITE_PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.VITE_EMAIL_USER,
    pass: process.env.VITE_EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log('Error with mail server:', error);
  } else {
    console.log('Mail server is ready to send emails');
  }
});

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.VITE_EMAIL_USER,
    to: process.env.VITE_EMAIL_USER,
    subject: `New Message from ${name} - ${email}`,
    text: message,
    replyTo: email,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ text: 'Failed to send message' });
    }
    res.status(200).json({ text: 'Message sent successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
