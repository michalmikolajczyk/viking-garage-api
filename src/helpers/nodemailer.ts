import * as nodemailer from 'nodemailer'
import config from '../config'

const transporter = nodemailer.createTransport(config.nodemailer)

function signinMail(email: string, token: string):Promise<any> {
  return new Promise((res, rej) => {
    const body = {
      from: config.nodemailer.auth.user,
      to: email,
      subject: 'Viking Garage Signin',
      text: `Click link: https://vikinggarage.com/verify/${token} to verify your new account`
    }

    transporter.sendMail(body, (err, info) => {
      if (err) {
        return rej(`Error with sending email ${err}`)
      }
      return res('User created successfully, email with token sent')
    })
  })
}

export {
  signinMail,
}
