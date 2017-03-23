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
  Offer
} from '../models/offer';
/**
 * Offer CRUD
 */

@Route('offer')
export class OfferController {

  /**
   * Get offer by id
   */
  @Get('{id}')
  @Tags('offer')
  public get(id: number, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): Promise<Offer> {
    return null;
  }

  /**
   * Create new offer
   */
  @Post('')
  @Tags('offer')
  public post(@Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {}

  /**
   * Update existing offer
   */
  @Put('{id}')
  @Tags('offer')
  public put(id: number, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {}

  /**
   * Delete offer by id
   */
  @Delete('{id}')
  @Tags('offer')
  public delete(id: number, @Inject() req: Request, @Inject() res: Response, @Inject() next: NextFunction): void {}
}
