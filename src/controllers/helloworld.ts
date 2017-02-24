import {
  Get,
  Inject,
  Request,
  Route,
} from 'tsoa'

@Route('hello')
export class Base {

  /** Get return 'Hello world' string */
  @Get('world')
  public helloworld(@Inject() req, @Inject() res, @Inject() next):void {
    res.send('Hello world')
  }
}
