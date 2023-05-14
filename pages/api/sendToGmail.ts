import { NextApiRequest, NextApiResponse } from "next";
import BLOG from "../../BLOG.config";
import nodemailer from "nodemailer";

// an email template that can be used with Nodemailer to send emails

const HTML_TEMPLATE = (text: string, mail: string, name: string) => {
  return `
    <html lang="ar"><head>
        <meta charset="utf-8">
        <title>Contact form message</title>
        <style>
          body{
            direction:rtl
          }
          .container {
            width: 100%;
            height: 100%;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .email {
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
          }
          .email-header {
            padding: 20px;
            text-align: center;
          }
          .email-body {
            padding: 20px;
          }
 
        </style>
      </head>
      <body>
        <div class="container">
          <div class="email">
            <div class="email-header">
              <img src="https://hamesh.vercel.app/logo.svg" style="
                  width: 5rem;
                ">              
            <h1 style="
                margin: 0;
            ">Hamesh Message</h1>
            </div>
            <div class="email-body">
            <h3>EMAIL:</h3>
            <p>${mail}</p>
            <h3>NAME:</h3>
            <p>${name}</p>
            <h3>Message:</h3>
              <p>${text}</p>
            </div>
          </div>
        </div>
      
    </body></html>
  `;
};

export default async function HANDLER(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    try {
      type EmailPayload = {
        from: string;
        name: string;
        text: string;
      };
      // Replace with your SMTP credentials
      const smtpOptions = {
        service: "gmail",
        auth: {
          user: BLOG.sendFromEmail.mail,
          pass: BLOG.sendFromEmail.password,
        },
      };

      let data: EmailPayload = req.body;
      if (!data) {
        return res.status(404).json("the requested data is not valid");
      }
      const transporter = nodemailer.createTransport({
        ...smtpOptions,
      });

      await transporter.sendMail({
        to: BLOG.email,
        subject: "Hamesh contact form message from " + data.name,
        html: HTML_TEMPLATE(data.text, data.from, data.name),
        from: data.from,
      });
      return res.status(200).json({ message: "the email is sended" });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
