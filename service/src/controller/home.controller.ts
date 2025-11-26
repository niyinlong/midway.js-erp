import { Controller, Get } from '@midwayjs/core';

const apiPath = '/home.controller.ts/home.controller';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
