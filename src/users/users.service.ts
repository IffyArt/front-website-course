import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return ['User 1', 'User 2'];
  }
}
