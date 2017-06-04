import {
  Body,
  Get,
  Post,
  Put,
  Tags,
  Route,
  Request,
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
  public get(@Request() req: any, @Request() res: any, @Request() next: any): void {
    user.get(req, res, next);
  }

  /**
   * Put user info
   */
  @Put('')
  @Tags('user')
  public put(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: UserInfo): void {
    user.put(req, res, next);
  }

  /**
   * Change user password with provided token
   * @param {UserChange} 'UserChange' password and user token
   */
  @Post('change')
  @Tags('login')
  public change(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: UserChange): void {
    auth.change(req, res, next);
  }

  /**
   * Check if user is logged in
   */
  @Get('check')
  @Tags('login')
  public check(@Request() req: any, @Request() res: any, @Request() next: any): void {
    auth.check(req, res, next);
  }

  /**
   * User login with credentials
   * @param {UserLogin} user login credentials
   */
  @Post('login')
  @Tags('login')
  public login(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: UserLogin): void {
    auth.login(req, res, next);
  }

  /**
   * User logout (end cookie session)
   */
  @Get('logout')
  @Tags('login')
  public logout(@Request() req: any, @Request() res: any, @Request() next: any): void {
    auth.logout(req, res, next);
  }

  /**
   * Resend email with verification link
   * @param {UserEmail} 'email' user email address
   */
  @Post('resend')
  @Tags('signin')
  public resend(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: UserEmail): void {
    auth.resend(req, res, next);
  }

  /**
   * Send email with reset url for provided email address
   * @param {UserEmail} 'email' user email address
   */
  @Post('reset')
  @Tags('login')
  public reset(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: UserEmail): void {
    auth.reset(req, res, next);
  }

  /**
   * User signin with credentials
   * @param {UserSigin} user credentials
   */
  @Post('signin')
  @Tags('signin')
  public signin(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: UserSignin): void {
    auth.signin(req, res, next);
  }

  /**
   * Verify and activate user by uuid token
   * @param {UserToken} 'UserToken' user uuid token
   */
  @Post('verify')
  @Tags('signin')
  public verify(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: UserToken): void {
    auth.verify(req, res, next);
  }
}
