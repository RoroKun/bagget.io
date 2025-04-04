import { INFO_DATA } from '@/data/utility/types'
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

    const bodyInfo: INFO_DATA = req.body;

    const htmlMessage = `
      <div>
        <p><b>FROM:</b> ${bodyInfo.subject}</p>  
        <p><b>NAME:</b> ${bodyInfo.name}</p>
        <p><b>FROM:</b> ${bodyInfo.from}</p>
        ${bodyInfo.phone && `<p><b>PHONE NUMBER:</b> ${bodyInfo.phone}</p>`}
        <p><b>MESSAGE:</b> ${bodyInfo.message}</p>
      </div>
    `
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "rohan@bagget.io, alan@bagget.io",
      subject: bodyInfo.subject, 
      text: `${bodyInfo.message}`, 
      html: htmlMessage, 
    }, (error: Error | null) => {
      if (error) {
        res.status(400).send({message: `Email failed 🫠 Error Message: ${error.message}`})
      } else {
        res.status(200).send({message: `Email sent successfully!`})
      }
    }) 
  }
}