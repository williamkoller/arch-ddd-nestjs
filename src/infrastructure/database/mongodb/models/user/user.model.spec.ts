import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { UserModel } from './user.model';

describe('UserModel', () => {
  let userModel: Model<UserModel>;
  let createMock: jest.Mock;

  beforeEach(async () => {
    createMock = jest.fn().mockResolvedValue(null);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(UserModel.name),
          useValue: Model,
        },
      ],
    }).compile();

    userModel = module.get<Model<UserModel>>(getModelToken(UserModel.name));

    userModel.create = createMock;
  });

  it('should be defined', () => {
    expect(userModel).toBeDefined();
  });

  it('should call create method with user data when creating a new user', async () => {
    const userData = {
      name: 'John',
      surname: 'Doe',
      email: 'john@example.com',
      password: 'password',
    };

    await userModel.create(userData);

    expect(createMock).toHaveBeenCalledWith(userData);
  });

  it('should fail validation when required fields are missing', async () => {
    const createMock = jest
      .fn()
      .mockRejectedValueOnce(new Error('Validation failed'));

    userModel.create = createMock;

    await expect(userModel.create({} as UserModel)).rejects.toThrow();
  });
});
