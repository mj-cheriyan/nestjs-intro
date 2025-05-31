import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { user } from './types/user';

@Injectable()
export class UsersService {
  private users: user[] = [];

  findAll() {
    return this.users;
  }

  findById(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  create(userDto: CreateUserDto) {
    const newUser = {
      id: Date.now(),
      ...userDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findByRole(role: string) {
    return this.users.filter((user) => user.role === role);
  }
}
