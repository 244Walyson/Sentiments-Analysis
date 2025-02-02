import { PrismaService } from "../../prisma.service";
import { PostRepositoryInterface } from "./post.repository.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostRepositoryImpl implements PostRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: any): Promise<any> {
    return await this.prismaService.post.create({ data: user });
  }
  async update(id: string, user: any): Promise<any> {
    return await this.prismaService.post.update({ where: { id }, data: user });
  }
  async findOne(id: string): Promise<any> {
    return await this.prismaService.post.findFirst({
      where: { OR: [{ id }, { postId: id }] },
    });
  }
  async delete(id: string): Promise<any> {
    return await this.prismaService.post.delete({ where: { id } });
  }
}
