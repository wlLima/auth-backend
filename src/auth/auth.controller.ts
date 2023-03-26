import { Controller, Get, Post, Request, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { SignUpDto, LoginDto } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async Register(@Body() data: SignUpDto) {
    return this.authService.register(data);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user
  }

}
