import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('world')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('key')
  postTeste(@Req() request){
    console.log(request.body)
    return 'OK'
  }
}
