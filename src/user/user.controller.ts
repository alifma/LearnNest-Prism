import { Body, Controller, Get, Param, Post, Patch, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}
  /**
   * Get users
   * @returns
   */
  @Get()
  async users() {
    return await this.userService.findAll();
  }
  /**
   * create user
   * @returns
   */
  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }
  /**
   * update user
   * @param id
   * @param data
   * @returns
   */
  @UsePipes(ValidationPipe)
  @Patch('/:id')
  async updateUser(@Param('id', ParseIntPipe) id, @Body() body) {
    return await this.userService.update(id, body);
  }

  /**
   * delete user
   * @param id
   * @returns
   */
  @UsePipes(ValidationPipe)
  @Delete('/:id')
  async deleteUser(@Param('id', ParseIntPipe) id) {
    return await this.userService.delete(id);
  }

}
