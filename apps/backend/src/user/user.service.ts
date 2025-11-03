import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './entity/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }

  async getUser(email: string): Promise<User | null> {
    return this.userRepository.getUserByEmail(email);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;
    const existingUser = await this.getUser(email);

    if (existingUser) {
      this.logger.warn(`Email "${email}" already exists. Aborting user creation.`);
      throw new ConflictException(`이미 가입된 이메일입니다: ${email}`);
    }

    const newUser = this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    this.logger.log(`User with email "${email}" created successfully.`);
    return newUser;
  }
}
