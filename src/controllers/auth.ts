import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  Get,
  Inject,
  Post,
  Route,
} from 'tsoa';
import {
  UserChange,
  UserEmail,
  UserLogin,
  UserSignin,
  UserToken,
} from '../models/auth';
import * as auth from '../services/auth';

@Route('user')
export class AuthController {

  /**
   * If user is logged in return object with user info
   */
  @Get('me')
  public me(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.me(req, res, next);
  }

  /**
   * Change user password with provided token
   * @param {UserChange} 'UserChange' password and user token
   */
  @Post('change')
  public change(body: UserChange, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.change(req, res, next);
  }

  /**
   * Check if user is logged in
   */
  @Get('check')
  public check(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.check(req, res, next);
  }

  /**
   * User login with credentials
   * @param {UserLogin} user login credentials
   */
  @Post('login')
  public login(body: UserLogin, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.login(req, res, next);
  }

  /**
   * User logout (end cookie session)
   */
  @Get('logout')
  public logout(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.logout(req, res, next);
  }

  /**
   * Resend email with reset url
   * @param {UserEmail} 'email' user email address
   */
  @Post('resend')
  public resend(body: UserEmail, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.resend(req, res, next);
  }

  /**
   * Send email with reset url for provided email address
   * @param {UserEmail} 'email' user email address
   */
  @Post('reset')
  public reset(body: UserEmail, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.reset(req, res, next);
  }

  /**
   * User signin with credentials
   * @param {UserSigin} user credentials
   */
  @Post('signin')
  public signin(body: UserSignin, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.signin(req, res, next);
  }

  /**
   * Verify and activate user by uuid token
   * @param {UserToken} 'UserToken' user uuid token
   */
  @Post('verify')
  public verify(body: UserToken, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.verify(req, res, next);
  }
}
