import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your email service provider (e.g., Gmail, Outlook)
  auth: {
    user: 'launchpadinventory@gmail.com', // Replace with your email
    pass: 'zahy cree fuxs ldho', // Replace with your email password or app password
  },

});

export const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'launchpadinventory@gmail.com',
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};
