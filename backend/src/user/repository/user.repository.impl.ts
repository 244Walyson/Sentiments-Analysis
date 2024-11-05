import { UserRepositoryInterface } from "./user.repository.interface";
import { User } from "../entities/user.entity";
import { PrismaService } from "../../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepositoryImpl implements UserRepositoryInterface {
  constructor(private readonly userRepository: PrismaService) {}

  async create(data: User): Promise<User> {
    return await this.userRepository.user.create({ data });
  }

  async findAllByCompanyId(companyId: string): Promise<User[]> {
    return await this.userRepository.user.findMany({
      where: { id: companyId },
    });
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.user.findUnique({ where: { id } });
  }

  async update(id: string, data: User): Promise<User> {
    return await this.userRepository.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.user.delete({ where: { id } });
  }
}
