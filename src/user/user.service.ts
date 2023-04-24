import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private dbService: PrismaService) {}

  /**
   * get all users
   * @returns
   */
  async findAll() {
    return await this.dbService.user.findMany();
  }
  /**
   * create user
   * @returns
   */
  async create(data: any) {
    return await this.dbService.user.create({ data });
  }
  /**
   * update user
   * @param id
   * @param data
   * @returns
   */
  async update(id: number, data: any) {
    return await this.dbService.user.update({ where: { id }, data: data });
  }
  /**
   * delete user
   * @param id
   * @returns
   */
  async delete(id: number) {
    return await this.dbService.user.delete({ where: { id }});
  }
}
