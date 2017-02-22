import * as express from 'express'
import {
  Request,
  Route,
  Post,
} from 'tsoa'
import {
  Message,
  User,
} from '../models/user'
import login from '../services/login'
import signin from '../services/signin'

@Route('auth')
export class AuthController {

  /**
   * User login with credentials
   */
  @Post('login')
  public async login(@Request() req: express.Request): Promise<Message> {
    let res, next
    return login(req, res, next)
  }

  /**
   * User signin with credentials
   */
  @Post('signin')
  public async signin(@Request() req: express.Request): Promise<Message> {
    let res, next
    return signin(req, res, next)
  }
}
