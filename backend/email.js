import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your email service provider (e.g., Gmail, Outlook)
  auth: {
    user: 'jojomaninang15.jm@gmail.com', // Replace with your email
    pass: '123', // Replace with your email password or app password
  },
});

export const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'jojomaninang15.jm@gmail.com',
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};
