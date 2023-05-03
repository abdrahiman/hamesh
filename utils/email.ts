import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};
// Replace with your SMTP credentials
const smtpOptions = {
  service: "gmail",
  auth: {
    user: "abderrhimaneddam@gmail.com",
    pass: "zzpzldwqwblnvcko",
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: "abderrhimaneddam@gmail.com",
    ...data,
  });
};
// Crondipie
// pietopie
// sendpietopie
