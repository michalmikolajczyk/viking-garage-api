import {
  Body,
  Get,
  Post,
  Put,
  Tags,
  Route,
  Request,
} from 'tsoa';
import { NewsletterModel } from '../models/newsletter';
import * as newsletterMethods from '../services/newsletter';

/**
 * Contact form
 */

@Route('newsletter')
export class NewsletterController {

  /**
   * Create new newsletter instance
   * @param {Newsletter} object with newsletter info
   */
  @Post('')
  @Tags('newsletter')
  public post(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: NewsletterModel): void {
    newsletterMethods.post(req, res, next);
  }
}
