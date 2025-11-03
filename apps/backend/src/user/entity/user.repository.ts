import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CustomRepository } from '../../db/typeorm-ex.decorator';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async getAllUsers(): Promise<User[]> {
    return await this.find();
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.findOneBy({ email });
  }
}
