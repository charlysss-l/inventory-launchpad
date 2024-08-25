import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your email service provider (e.g., Gmail, Outlook)
  auth: {
    user: 'maninangjojo28@gmail.com', // Replace with your email
    pass: 'ttde roac ydzv jlnv', // Replace with your email password or app password
  },

});

export const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'maninangjojo28@gmail.com',
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};
