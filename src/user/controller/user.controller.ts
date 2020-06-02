import { Controller, Get } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
  @Get()
  getUser(): UserDto {
    return {
      firstName: 'firstname',
      lastName: 'lastname',
      email: 'test@email.com',
      password: 'xxxxxx',
    };
  }
}
