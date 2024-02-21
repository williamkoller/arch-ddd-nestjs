import { User } from 'src/domain/user/user';
import { UserModel } from 'src/infrastructure/database/mongodb/models/user/user.model';

export interface UserRepositoryInterface {
  create: (data: User) => Promise<UserModel>;
  find: () => Promise<UserModel[]>;
  findById: (id: string) => Promise<UserModel>;
  update: (id: string, dataUpdate: User) => Promise<UserModel>;
  remove: (id: string) => Promise<void>;
}
