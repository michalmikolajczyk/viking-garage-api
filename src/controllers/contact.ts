import {
  Body,
  Get,
  Post,
  Put,
  Tags,
  Route,
  Request,
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
  public post(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: ContactBody): void {
    contact.contact(req, res, next);
  }
}
