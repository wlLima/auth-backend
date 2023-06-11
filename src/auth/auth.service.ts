import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  register(data) {
    this.userService.create(data);
  }

  async profile(data) {
    const teste = await this.userService.findOne(data);
    return teste;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload, { secret: jwtConstants() }),
    };
  }
}
