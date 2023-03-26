import { Injectable } from '@nestjs/common';
import { SignUp, Login } from './interfaces/auth.interface'
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService){}

  register(data) {
    this.userService.create(data)
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
