import * as nodemailer from 'nodemailer'
import config from '../config'

const transporter = nodemailer.createTransport(config.nodemailer)

function signinMail(email: string, token: string, resolve: Function) {
  const body = {
    from: config.nodemailer.auth.user,
    to: email,
    subject: 'Submit ok!',
    text: `its ok! http://localhost:3000/verify/${token}`
  }

  transporter.sendMail(body, (err, info) => {
    if (err) {
      return resolve({
        err: true,
        msg: `Error with sending email ${err}`
      })
    }
    return resolve({
      err: false,
      msg: 'User created successfully, email with token sent'
    })
  })
}

export {
  signinMail,
}
