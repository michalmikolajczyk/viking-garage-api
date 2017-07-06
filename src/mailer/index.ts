import * as nodemailer from 'nodemailer';
import {
  contactMessage,
  signinMessage,
  resetMessage,
  rideMessage,
} from './templates';

if (!process.env.GMAIL_USER ||
    !process.env.GMAIL_CLIENT_ID ||
    !process.env.GMAIL_CLIENT_SECRET ||
    !process.env.GMAIL_REFRESH_TOKEN) {
  console.log('You should set Gmail OAuth2 envs');
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.GMAIL_USER,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  },
});

function sendEmail(body: any): Promise<any> {
  if (process.env.NODE_ENV === 'test') return Promise.resolve();
  return new Promise((res, rej) => {
    transporter.sendMail(body, (err, info) => {
      if (err) return rej(`Email sent error ${err}`);
      return res(`Email sent successfully ${info}`);
    });
  });
}

function signinEmail(name: string, email: string, token: string, code: string): Promise<any> {
  const body = {
    from: process.env.GMAIL_USER,
    to: email,
    ...signinMessage(name, token, code),
  };
  return sendEmail(body);
}

function resetEmail(name: string, email: string, token: string, code: string): Promise<any> {
  const body = {
    from: process.env.GMAIL_USER,
    to: email,
    ...resetMessage(name, token, code),
  };
  return sendEmail(body);
}

function contactEmail(data: any): Promise<any> {
  const {
    name,
    email,
    type,
    body,
    message,
    code,
  } = data;
  const contactBody = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    ...contactMessage(name, email, type, message, body),
  };
  if (type === 'ride') {
    const rideBody = {
      from: process.env.GMAIL_USER,
      to: email,
      ...rideMessage(name, code),
    };
    return Promise.all([
      sendEmail(rideBody),
      sendEmail(contactBody),
    ]);
  }
  return sendEmail(contactBody);
}

export {
  signinEmail,
  resetEmail,
  contactEmail,
}
