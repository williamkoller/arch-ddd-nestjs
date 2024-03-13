import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddUserUseCase } from '../../usecases/user/add-user/add-user-usecase';
import { LoadAllUsersUseCase } from 'src/usecases/user/load-all-users/load-all-users-usecase';

@Controller('users')
export class UserController {
  constructor(
    private readonly addUserUseCase: AddUserUseCase,
    private readonly loadAllUsersUseCase: LoadAllUsersUseCase,
  ) {}

  @Post()
  async create(@Body() dto: any) {
    return await this.addUserUseCase.create(dto);
  }

  @Get()
  async load() {
    return await this.loadAllUsersUseCase.load();
  }
}
