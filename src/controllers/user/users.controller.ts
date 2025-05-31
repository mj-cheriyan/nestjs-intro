import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

interface CreateUserDto {
  name: string;
}

@Controller('users')
export class UserController {
  @Get()
  getAllUsers() {
    return [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    return users.find((user) => user.id.toString() === id) || {};
  }

  @Post()
  saveUser(@Body() body: CreateUserDto) {
    return { message: 'User created', data: { name: 'John Doe' } };
  }

  @Get('/search')
  searchUserByRole(@Query('role') role: string) {
    return { role: 'admin' };
  }
}
