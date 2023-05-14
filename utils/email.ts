import nodemailer from "nodemailer";
import BLOG from "../BLOG.config";

type EmailPayload = {
  from: string;
  name: string;
  html: string;
};
// Replace with your SMTP credentials
const smtpOptions = {
  service: "gmail",
  auth: {
    user: BLOG.sendFromEmail.mail,
    pass: BLOG.sendFromEmail.password,
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    to: BLOG.email,
    ...data,
  });
};
