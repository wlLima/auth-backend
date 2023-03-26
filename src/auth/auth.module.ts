import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/users/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      signOptions: {expiresIn: '60s'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
