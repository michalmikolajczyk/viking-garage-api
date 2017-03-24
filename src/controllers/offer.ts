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
  Offer,
  OfferPost,
} from '../models/offer';
import * as offer from '../services/offer';

/**
 * Offer CRUD
 */

@Route('offer')
export class OfferController {
  /**
   * Delete offer by id
   */
  @Delete('{id}')
  @Tags('offer')
  public delete(id: number, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    offer.del(req, res, next);
  }

  /**
   * Get offer by id
   */
  @Get('{id}')
  @Tags('offer')
  public get(id: number, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    offer.get(req, res, next);
  }

  /**
   * Get all offer
   */
  @Get('')
  @Tags('offer')
  public getAll(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    offer.getAll(req, res, next);
  }

  /**
   * Create new offer
   * @param {OfferPost} object with offer info
   */
  @Post('')
  @Tags('offer')
  public post(body: OfferPost, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    offer.post(req, res, next);
  }

  /**
   * Update existing offer
   */
  @Put('{id}')
  @Tags('offer')
  public put(id: number, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {
    offer.put(req, res, next);
  }
}
