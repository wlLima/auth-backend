import { Injectable } from '@nestjs/common';
import { SignUp, Login } from './interfaces/auth.interface'
import { InjectRepository } from '@nestjs/typeorm';
import {User} from '../users/user.entity'
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ){}


  register(data: SignUp) {
    return this.usersRepository.save(data)
  }

  login(data: Login) {
    const user = this.usersRepository.findOneBy({email: data.email})
    // if(user){
    //   return "Ok"
    // }

    return user
  }
}
