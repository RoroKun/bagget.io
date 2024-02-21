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
    // TODO: replace with environment variables
    user: "stupidemail",
    pass: "stupidpass",
  },
});

// TODO: MAKE IT GLOBAL
interface infoData {
  name: string;
  from: string;
  message: string;
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if(req.method === "POST") {

    // TODO: destructure req.body into object for below object  

    const bodyInfo: infoData = req.body;

    // alert(bodyInfo)
    console.log(bodyInfo, typeof(bodyInfo))

    const info = await transporter.sendMail({
      from: `"${bodyInfo.name}" ${bodyInfo.from}`, // sender address
      // to: "alan@bagget.io, cesar@bagget.io, rohan@bagget.io, michael@bagget.io", // list of receivers
      to: "alan@bagget.io", // list of receivers
      subject: "Email Form Test ✔", // Subject line
      text: `${bodyInfo.message}`, // plain text body
      html: `<p>${bodyInfo.message}</p>`, // html body
    }); // add some then/catch error handling

    res.status(200).send({message: `Sent Email!${info.messageId}`})
  }
}