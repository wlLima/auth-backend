import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ){}

  create(data: UserDto) {
    return this.usersRepository.save(data)
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

}
