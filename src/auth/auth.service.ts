import { Injectable } from '@nestjs/common';
import { SignUp, Login } from './interfaces/auth.interface'

@Injectable()
export class AuthService {
  private readonly auth: SignUp[] = []


  register(data: SignUp) {
    this.auth.push(data)
    console.log(this.auth)
  }

  login(data: Login) {
    const user = this.auth.find(register => register.email === data.email && register.password === data.password)
    if(user){
      return "Ok"
    }

    return "Usuário não encontrado!"
  }

  status(): string {
    return 'ok'
  }
}
