import {
  Body,
  Get,
  Post,
  Put,
  Tags,
  Route,
  Request,
} from 'tsoa';
import { PaymentModel } from '../models/payment';
import * as paymentMethods from '../services/payment';

/**
 * Contact form
 */

@Route('payment')
export class PaymentController {

  /**
   * Get payment by id
   */
  @Get('{id}')
  @Tags('payment')
  public get(@Request() req: any, @Request() res: any, @Request() next: any, id: number): void {
    paymentMethods.get(req, res, next);
  }

  /**
   * Create new payment instance
   * @param {Payment} object with payment info
   */
  @Post('')
  @Tags('payment')
  public post(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: PaymentModel): void {
    paymentMethods.post(req, res, next);
  }
}
