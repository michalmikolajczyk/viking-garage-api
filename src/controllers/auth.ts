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
  public async signin(): Promise<User[]> {
    return [
      {
        createdAt: new Date(),
        email: 'test@test.com',
        id: 1
      },
      {
        createdAt: new Date(),
        email: 'test2@test2.com',
        id: 2,
      }
    ];
  }
}
