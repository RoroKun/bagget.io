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
    pass: "stupidpassword",
  },
});


 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if(req.method === "POST") {

    // TODO: destructure req.body into object for below object  

    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <alan@bagget.io>', // sender address
      to: "alan@bagget.io, cesar@bagget.io, rohan@bagget.io, michael@bagget.io", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    }); // add some then/catch error handling

    res.status(200).send({message: "Sent Email!"})
  }
}