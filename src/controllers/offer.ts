import {
  Body,
  Get,
  Post,
  Put,
  Delete,
  Tags,
  Route,
  Request,
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
  public delete(@Request() req: any, @Request() res: any, @Request() next: any, id: number): void {
    offer.del(req, res, next);
  }

  /**
   * Get offer by id
   */
  @Get('{id}')
  @Tags('offer')
  public get(@Request() req: any, @Request() res: any, @Request() next: any, id: number): void {
    offer.get(req, res, next);
  }

  // /**
  //  * Get all offer
  //  */
  @Get('')
  @Tags('offer')
  public getAll(@Request() req: any, @Request() res: any, @Request() next: any): void {
    offer.getAll(req, res, next);
  }

  // /**
  //  * Create new offer
  //  * @param {OfferPost} object with offer info
  //  */
  @Post('')
  @Tags('offer')
  public post(@Request() req: any, @Request() res: any, @Request() next: any, @Body() body: OfferPost): void {
    offer.post(req, res, next);
  }

  // /**
  //  * Update existing offer
  //  */
  @Put('{id}')
  @Tags('offer')
  public put(@Request() req: any, @Request() res: any, @Request() next: any, id: number): void {
    offer.put(req, res, next);
  }
}
