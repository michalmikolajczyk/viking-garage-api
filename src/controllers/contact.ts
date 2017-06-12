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
import { ContactBody } from '../models/contact';
import * as contact from '../services/contact';

/**
 * Contact form
 */

@Route('contact')
export class ContactController {

  /**
   * Create new contact instance
   * @param {ContactBody} object with contact info
   */
  @Post('')
  @Tags('contact')
  public post(body: ContactBody, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    contact.contact(req, res, next);
  }
}
