import {
  Body,
  Get,
  Post,
  Put,
  Tags,
  Route,
  Request,
} from 'tsoa';
import { Booking } from '../models/booking';
import * as bookingMethods from '../services/booking';

/**
 * Contact form
 */

@Route('contact')
export class BookingController {

  /**
   * Get booking by id
   */
  @Get('{id}')
  @Tags('booking')
  public get(@Request() req: any, @Request() res: any, @Request() next: any, id: number): void {
    bookingMethods.get(req, res, next);
  }

  /**
   * Create new booking instance
   * @param {Booking} object with booking info
   */
  @Post('')
  @Tags('booking')
  public post(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: Booking): void {
    bookingMethods.post(req, res, next);
  }

  /**
   * Get booking by id
   */
  @Get('{id}')
  @Tags('booking')
  public put(@Request() req: any, @Request() res: any, @Request() next: any, id: number): void {
    bookingMethods.put(req, res, next);
  }

  /**
   * Get booking by id
   */
  @Get('{id}')
  @Tags('booking')
  public delete(@Request() req: any, @Request() res: any, @Request() next: any, id: number): void {
    bookingMethods.del(req, res, next);
  }
}
