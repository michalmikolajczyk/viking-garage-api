import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  Get,
  Inject,
  Post,
  Put,
  Tags,
  Route,
} from 'tsoa';
import {
  UserChange,
  UserEmail,
  UserLogin,
  UserSignin,
  UserToken,
} from '../models/auth';
import { UserInfo } from '../models/user';
import * as auth from '../services/auth';
import * as user from '../services/user';

@Route('user')
export class AuthController {

  /**
   * Get user info
   */
  @Get('')
  @Tags('user')
  public get(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    user.get(req, res, next);
  }

  /**
   * Put user info
   */
  @Put('')
  @Tags('user')
  public put(body: UserInfo, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    user.put(req, res, next);
  }

  /**
   * Change user password with provided token
   * @param {UserChange} 'UserChange' password and user token
   */
  @Post('change')
  @Tags('login')
  public change(body: UserChange, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.change(req, res, next);
  }

  /**
   * Check if user is logged in
   */
  @Get('check')
  @Tags('login')
  public check(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.check(req, res, next);
  }

  /**
   * User login with credentials
   * @param {UserLogin} user login credentials
   */
  @Post('login')
  @Tags('login')
  public login(body: UserLogin, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.login(req, res, next);
  }

  /**
   * User logout (end cookie session)
   */
  @Get('logout')
  @Tags('login')
  public logout(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.logout(req, res, next);
  }

  /**
   * Resend email with verification link
   * @param {UserEmail} 'email' user email address
   */
  @Post('resend')
  @Tags('signin')
  public resend(body: UserEmail, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.resend(req, res, next);
  }

  /**
   * Send email with reset url for provided email address
   * @param {UserEmail} 'email' user email address
   */
  @Post('reset')
  @Tags('login')
  public reset(body: UserEmail, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.reset(req, res, next);
  }

  /**
   * User signin with credentials
   * @param {UserSigin} user credentials
   */
  @Post('signin')
  @Tags('signin')
  public signin(body: UserSignin, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.signin(req, res, next);
  }

  /**
   * Verify and activate user by uuid token
   * @param {UserToken} 'UserToken' user uuid token
   */
  @Post('verify')
  @Tags('signin')
  public verify(body: UserToken, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.verify(req, res, next);
  }
}
