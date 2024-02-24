import { infoData } from "@/data/email-data";
import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer');
 
type ResponseData = {
  message: string
}

"use strict";

const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if(req.method === "POST") { 

    const bodyInfo: infoData = req.body;

    const htmlMessage = `
      <div>
        <p><b>NAME:</b> ${bodyInfo.name}</p>
        <p><b>EMAIL:</b> ${bodyInfo.from}</p>
        <p><b>MESSAGE:</b> ${bodyInfo.message}</p>
      </div>
    `

    const info = await transporter.sendMail({
      from: `"${bodyInfo.name}" ${bodyInfo.from}`, // sender address
      // to: "alan@bagget.io, cesar@bagget.io, rohan@bagget.io, michael@bagget.io", // list of receivers
      to: "alan@bagget.io", // test email
      subject: bodyInfo.subject, // Subject line
      text: `${bodyInfo.message}`, // plain text body
      html: htmlMessage, // html body
    }, (error: any, info: any) => {
      if (error) {
        res.status(554).send({message: `Email failed 🫠 Error Message: ${error.response}`})
      } else {
        res.status(200).send({message: `Email sent successfully! \nMessage id: ${info.messageId}`})
      }
    }) 
  }
}