import { Module } from '@nestjs/common';
import {AuthController} from './auth.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
