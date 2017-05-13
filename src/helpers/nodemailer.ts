import * as nodemailer from 'nodemailer';
const config = {
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
}
const transporter = nodemailer.createTransport(config);

function sendEmail(body: any): Promise<any> {
  return new Promise((res, rej) => {
    transporter.sendMail(body, (err, info) => {
      if (err) return rej(`Email sent error ${err}`);
      return res(`Email sent successfully ${info}`);
    });
  });
}

function signinEmail(name: string, email: string, token: string): Promise<any> {
  const body = {
    from: config.auth.user,
    to: email,
    subject: 'Hi' + ` ${name}, ` + 'ride with VIKING GARAGE',
    text: 'Hello' + ` ${name}!` +
      '\n\n' +
      'Welcome to VIKING GARAGE! You have just joined a platform connecting motorcycles riders worldwide.' +
      '\n' +
      'We’re glad you want to ride with us! Before you start exploring our Garage, please click link below,' +
      '\n' +
      'to confirm that you are a real rider and not an evil robot' +
      '\n\n' +
      `http://www.vikinggarage.com/verify/${token}` +
      '\n\n' +
      'You can also copy and paste this link into your web browser' +
      '\n' +
      "Thanks again for joining. See you ridin' round!" +
      '\n\n' +
      'Greetings from our VIKING GARAGE!',
  };
  return sendEmail(body);
}

function resetEmail(name: string, email: string, token: string): Promise<any> {
  const body = {
    from: config.auth.user,
    to: email,
    subject: 'VIKING GARAGE Reset Password',
    text: 'Hi' + ` ${name}!` +
      '\n\n' +
      'We received a request to change the password for your Viking Garage account.' +
      '\n' +
      'If you did not make this request, just ignore this email. Otherwise, please click the link below to change your password:' +
      '\n\n' +
      `http://www.vikinggarage.com/change/${token}` +
      '\n\n' +
      'You can also copy and paste this link into your web browser' +
      '\n\n' +
      'Greetings from our VIKING GARAGE!',
  };
  return sendEmail(body);
}

export {
  signinEmail,
  resetEmail,
}
