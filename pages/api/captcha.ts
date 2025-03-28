import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

type ResponseData = {
  message: string
}

// "use strict";

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  
  if(req.method === "POST") { 
    
    try {
        
        const token = req.body.token;
        const key = process.env.CAPTCHA_SECRET_KEY;
        
        if (!token) {
            res.status(400).send({message: `reCAPTCHA token is missing`})
        }
         
        const recaptchaResponse = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${token}`);

        if(recaptchaResponse.data.success) {
            res.status(200).send({message: `reCAPTCHA verification successful`})
        } else {
          const errorCodes = recaptchaResponse.data['error-codes'] || ['try again'];
          return res.status(400).json({ message: `VERIFICATION FAILED: ${errorCodes[0]}` });
        }
    } catch (error) {
        res.status(500).send({message: `Internal server error: ${error}`})
    }
  }
}