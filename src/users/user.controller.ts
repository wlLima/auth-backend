import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('list')
  async findAll() {
    return this.userService.findAll();
  }

  @Post('register')
  async Register(@Body() data) {
    return this.userService.create(data);
  }

}
