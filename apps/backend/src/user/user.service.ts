import { Injectable } from '@nestjs/common';
import { UserRepository } from './entity/user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const { username, email, password } = createUserDto;
    const getUserQuery = this.userRepository
      .createQueryBuilder('user')
      .where('user.user_name = :username', { username });
  }
}
