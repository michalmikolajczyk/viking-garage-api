import * as nodemailer from 'nodemailer';
import {
  signinMessage,
  resetMessage,
} from './templates';
const ride = process.env.VG_RIDE || 'viking.garage.app@gmail.com';
const config = {
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};
const transporter = nodemailer.createTransport(config);

function sendEmail(body: any): Promise<any> {
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

function rideEmail(data: any): Promise<any> {
  const {
    name,
    email,
    offer,
    total,
    startDate,
    endDate,
    equipment,
  } = data;
  const body = {
    from: config.auth.user,
    to: ride,
    subject: `New ride request from ${name}, ${email}`,
    text:
`Name: ${name},
Email: ${email},
Offer Id: www.vikinggarage.com/offer/${offer}
Start Date: ${startDate},
End Date: ${endDate},
Equipment Type: ${equipment},
`,
  };
  return sendEmail(body);
}

export {
  signinEmail,
  resetEmail,
  rideEmail,
}
