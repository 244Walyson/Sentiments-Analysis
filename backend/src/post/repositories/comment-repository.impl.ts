import { PrismaService } from "src/prisma.service";
import { CommentRepositoryInterface } from "./comment-repository.interface";
import { Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CommentRepositoryImpl implements CommentRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(comment: Prisma.CommentCreateInput): Promise<any> {
    return await this.prismaService.comment.create({ data: comment });
  }
  async update(id: string, comment: any): Promise<any> {
    return await this.prismaService.comment.update({
      where: { id },
      data: comment,
    });
  }
  async findAllByPost(id: string): Promise<any> {
    return await this.prismaService.comment.findMany({
      where: { postId: id },
    });
  }
  async delete(id: string): Promise<any> {
    return await this.prismaService.comment.delete({ where: { id } });
  }
}
