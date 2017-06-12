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
import { RideBody } from '../models/ride';
import * as ride from '../services/ride';

/**
 * Ride Booking
 */

@Route('ride')
export class RideController {

  /**
   * Create new ride booking
   * @param {RideBody} object with booking info
   */
  @Post('')
  @Tags('ride')
  public post(body: RideBody, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    ride.ride(req, res, next);
  }
}
