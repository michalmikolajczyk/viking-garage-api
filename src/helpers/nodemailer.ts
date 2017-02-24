import * as nodemailer from 'nodemailer'
import config from '../config'

const transporter = nodemailer.createTransport(config.nodemailer)

function signinMail(email: string, token: string):Promise<any> {
  return new Promise((res, rej) => {
    const body = {
      from: config.nodemailer.auth.user,
      to: email,
      subject: 'Submit ok!',
      text: `its ok! https://vikinggarage.com/verify/${token}`
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
