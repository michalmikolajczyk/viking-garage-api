import * as nodemailer from 'nodemailer';
import {
  signinMessage,
  resetMessage,
} from './templates';
const ride = process.env.VG_CONTACT_EMAIL || 'viking.garage.app@gmail.com';
const config = {
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};
const transporter = nodemailer.createTransport(config);

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
    from: config.auth.user,
    to: email,
    ...signinMessage(name, token, code),
  };
  return sendEmail(body);
}

function resetEmail(name: string, email: string, token: string, code: string): Promise<any> {
  const body = {
    from: config.auth.user,
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
  } = data;
  const emailBody = {
    from: config.auth.user,
    to: ride,
    subject: `[${type}] contact request from ${name}, ${email}`,
    text:
`TYPE: ${type},
Name: ${name},
Email: ${email},
---
Message from user: ${message || 'no message'}
---
${body || ''}`,
  };
  return sendEmail(emailBody);
}

export {
  signinEmail,
  resetEmail,
  contactEmail,
}
