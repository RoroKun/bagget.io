import { infoData } from '../../data/email-data'
import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer');

type ResponseData = {
  message: string
}

// "use strict";

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
        <p><b>FROM:</b> ${bodyInfo.subject}</p>  
        <p><b>NAME:</b> ${bodyInfo.name}</p>
        <p><b>FROM:</b> ${bodyInfo.from}</p>
        ${bodyInfo.phone && `<p><b>PHONE NUMBER:</b> ${bodyInfo.phone}</p>`}
        <p><b>MESSAGE:</b> ${bodyInfo.message}</p>
      </div>
    `

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: "rohan@bagget.io", // target email individual
      cc: "alan@bagget.io, cesar@bagget.io, michael@bagget.io", // list of receivers
      subject: bodyInfo.subject, // Subject line
      text: `${bodyInfo.message}`, // plain text body
      html: htmlMessage, // html body
    }, (error: any, info: any) => {
      if (error) {
        res.status(400).send({message: `Email failed 🫠 Error Message: ${error.response}`})
      } else {
        res.status(200).send({message: `Email sent successfully! \nMessage id: ${info.messageId}`})
      }
    }) 
  }
}