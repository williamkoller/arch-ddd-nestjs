import { AddUserUseCase } from '../../usecases/user/add-user-usecase';
import { UserController } from './user.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { User, UserProps } from '../../domain/user/user';

describe('UserController', () => {
  let userController: UserController;
  let addUserUseCase: AddUserUseCase;

  beforeEach(async () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email@mail.com',
      password: 'any_pass',
    };
    const user = User.create(userProps);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: AddUserUseCase,
          useValue: {
            create: jest.fn().mockResolvedValue(user),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    addUserUseCase = module.get<AddUserUseCase>(AddUserUseCase);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(addUserUseCase).toBeDefined();
  });

  it('should create user', async () => {
    const dto = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email@mail.com',
      password: 'any_pass',
    };

    await userController.create(dto);

    expect(addUserUseCase.create).toHaveBeenCalledWith(dto);
  });
});
