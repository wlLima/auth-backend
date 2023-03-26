import { Injectable } from '@nestjs/common';
import { SignUp, Login } from './interfaces/auth.interface'
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService){}


  register(data) {
    this.userService.create(data)
  }

  async validateUser(data: Login) {
    const user = await this.userService.findOne(data.email)

    if(user && user.password === data.password){
      const { password, ...result} = user;
      return result
    }

    return null
  }
}
