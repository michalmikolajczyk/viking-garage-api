import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  Get,
  Post,
  Put,
  Delete,
  Tags,
  Inject,
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

@Route('offer')
export class OfferController {

  /**
   * If user is logged in return object with user info
   */
  @Get('{id}')
  @Tags('offer')
  public get(id: number, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.me(req, res, next);
  }

  /**
   * Change user password with provided token
   */
  @Post('')
  @Tags('offer')
  public post(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.change(req, res, next);
  }

  /**
   * Change user password with provided token
   */
  @Put('{id}')
  @Tags('offer')
  public put(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.change(req, res, next);
  }

  /**
   * Change user password with provided token
   */
  @Delete('{id}')
  @Tags('offer')
  public delete(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    auth.change(req, res, next);
  }
}
