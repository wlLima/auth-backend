import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express'
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  Register(@Req() req: Request): string {
    //console.log(req.body)
    return this.authService.register();
  }


}
