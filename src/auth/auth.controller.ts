import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto, LoginDto } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async Register(@Body() data: SignUpDto) {
    return this.authService.register(data);
  }

  // @Post('login')
  // async Login(@Body() data: LoginDto) {
  //   return this.authService.login(data)
  // }

}
