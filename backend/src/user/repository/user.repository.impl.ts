import { UserRepositoryInterface } from "./user.repository.interface";
import { User } from "../entities/user.entity";
import { PrismaService } from "../../prisma.service";
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Injectable()
export class UserRepositoryImpl implements UserRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async findAllByCompanyId(companyId: string): Promise<User[]> {
    return await this.prisma.user.findMany({
      where: { id: companyId },
    });
  }

  async findOne(id: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
