import * as express from 'express'
import {
  Get,
  Inject,
  Post,
  Route,
} from 'tsoa'
import {
  UserLogin,
  UserSignin,
} from '../models/auth'
import {
  login,
  logout,
  signin,
  verify,
} from '../services/auth'

@Route('auth')
export class AuthController {

  /**
   * User login with credentials
   * @param {UserLogin} user login credentials
   */
  @Post('login')
  public login(body: UserLogin, @Inject() req, @Inject() res, @Inject() next):void {
    login(req, res, next)
  }

  /**
   * User logout (end cookie session)
   */
  @Get('logout')
  public logout(@Inject() req, @Inject() res, @Inject() next):void {

  }

  /**
   * User signin with credentials
   * @param {UserSigin} user credentials
   */
  @Post('signin')
  public signin(body: UserSignin, @Inject() req, @Inject() res, @Inject() next):void {
    signin(req, res, next)
  }

  /**
   * Verify user by uuid token
   * @param {string} 'token' uuid token
   */
  @Get('verify')
  public verify(token: string, @Inject() req, @Inject() res, @Inject() next):void {
    verify(req, res, next)
  }
}
