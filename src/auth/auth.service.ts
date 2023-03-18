import { Injectable } from '@nestjs/common';
import { SignUp } from './interfaces/auth.interface'

@Injectable()
export class AuthService {
  private readonly auth: SignUp[] = []


  register(data: SignUp) {
    this.auth.push(data)
  }

  help(): string {
    return 'Help you!!!'
  }

  status(): string {
    return 'ok'
  }
}
