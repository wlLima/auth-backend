import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  Register(@Body() signUpDto: SignUpDto) {
    return this.authService.register(signUpDto);
  }


}
