import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(): string {
    return 'Registro em desenvolvimento!';
  }

  help(): string {
    return 'Help you!!!'
  }

  status(): string {
    return 'ok'
  }
}
