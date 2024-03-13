import { UserRepositoryInterface } from 'src/data/protocols/db/user/user-repository.interface';
import { User } from 'src/domain/user/user';
import { UserTranstormer } from 'src/main/transformers/user/user.transformer';

export class AddUserUseCase {
  constructor(private readonly userRepo: UserRepositoryInterface) {}

  async create(user: User) {
    const userDb = await this.userRepo.create(user);
    return UserTranstormer.toUser(userDb);
  }
}
