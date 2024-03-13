import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/user.controller';
import { UserRepositoryInterface } from 'src/data/protocols/db/user/user-repository.interface';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { MongodbUserRepository } from 'src/infrastructure/database/mongodb/repositories/user/mongodb-user-repository';
import { AddUserUseCase } from 'src/usecases/user/add-user/add-user-usecase';
import { LoadAllUsersUseCase } from 'src/usecases/user/load-all-users/load-all-users-usecase';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: AddUserUseCase,
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new AddUserUseCase(userRepo);
      },
      inject: [MongodbUserRepository],
    },
    {
      provide: LoadAllUsersUseCase,
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new LoadAllUsersUseCase(userRepo);
      },
      inject: [MongodbUserRepository],
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
