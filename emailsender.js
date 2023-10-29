/npm init -y
/npm install nodemailer

const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: 'your-email@gmail.com', // Your email address
    pass: 'your-password' // Your email password or app-specific password
  }
});

// Email data
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com', // Recipient's email address
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js using Nodemailer.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});


node emailsender.js
