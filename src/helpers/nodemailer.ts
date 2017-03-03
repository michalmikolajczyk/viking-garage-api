import * as nodemailer from 'nodemailer';
import config from '../config';
const transporter = nodemailer.createTransport(config.nodemailer);
const host = 'http://localhost:3000';

function sendEmail(body: any): Promise<any> {
  return new Promise((res, rej) => {
    transporter.sendMail(body, (err, info) => {
      if (err) return rej(`Email sent error ${err}`);
      return res(`Email sent successfully ${info}`);
    });
  });
}

function signinEmail(email: string, token: string): Promise<any> {
  const body = {
    from: config.nodemailer.auth.user,
    to: email,
    subject: 'Viking Garage Signin',
    text: `Click link: ${host}/verify/${token} to verify your new account`,
  };
  return sendEmail(body);
}

function resetEmail(email: string, token: string): Promise<any> {
  const body = {
    from: config.nodemailer.auth.user,
    to: email,
    subject: 'Viking Garage Reset Password',
    text: `Click link: ${host}/change/${token} to change your password`,
  };
  return sendEmail(body);
}

export {
  signinEmail,
  resetEmail,
}
