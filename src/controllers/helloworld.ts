import {
  Route,
  Get,
} from 'tsoa'

@Route('hello')
export class Base {

  /** Get return 'Hello world' string */
  @Get('world')
  public async helloworld(): Promise<string> {
    return 'Hello world';
  }
}
