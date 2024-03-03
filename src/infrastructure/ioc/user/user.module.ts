import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/user.controller';
import { UserRepositoryInterface } from 'src/data/protocols/db/user/user-repository.interface';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { MongodbUserRepository } from 'src/infrastructure/database/mongodb/repositories/user/mongodb-user-repository';
import { AddUserUseCase } from 'src/usecases/user/add-user-usecase';

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
  ],
  controllers: [UserController],
})
export class UserModule {}
