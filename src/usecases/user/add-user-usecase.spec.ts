import { UserRepositoryInterface } from '../../data/protocols/db/user/user-repository.interface';
import { AddUserUseCase } from './add-user-usecase';
import { User, UserProps } from '../../domain/user/user';

describe('AddUserUseCase Unit Test', () => {
  let addUserUseCase: AddUserUseCase;
  let userRepositoryMock: jest.Mocked<UserRepositoryInterface>;

  beforeEach(() => {
    userRepositoryMock = {
      create: jest.fn(),
      find: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    } as jest.Mocked<UserRepositoryInterface>;

    addUserUseCase = new AddUserUseCase(userRepositoryMock);
  });

  it('should be defined', () => {
    expect(addUserUseCase).toBeDefined();
  });

  it('should be create new user', async () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email@mail.com',
      password: 'any_pass',
    };

    const expectedUser = {
      _id: 'generated_id',
      name: 'any_name',
      surname: 'any_surname',
      email: 'email@mail.com',
      password: 'any_pass',
      createdAt: new Date('2024-02-29T14:12:30.503Z'),
      updatedAt: new Date('2024-02-29T14:12:30.503Z'),
    };

    userRepositoryMock.create.mockResolvedValue(expectedUser);

    const user = User.create(userProps);
    const result = await addUserUseCase.create(user);
    expect(userRepositoryMock.create).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expectedUser);
  });
});
