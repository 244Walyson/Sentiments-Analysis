import { Injectable } from "@nestjs/common";
import { SentimentByPostRepositoryInterface } from "./sentiment-by-post.repository.interface";
import { PrismaService } from "../../../prisma.service";

@Injectable()
export class SentimentByPostRepositoryImpl
  implements SentimentByPostRepositoryInterface
{
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<any[]> {
    return await this.prismaService.sentimentByPost.findMany();
  }

  async findOneByNetwork(network: string): Promise<any> {
    return await this.prismaService.sentimentByPost.findFirst({
      where: { network },
    });
  }

  async create(sentimentByPost: any): Promise<any> {
    return await this.prismaService.sentimentByPost.create({
      data: sentimentByPost,
    });
  }
  async update(id: string, sentimentByPost: any): Promise<any> {
    return await this.prismaService.sentimentByPost.update({
      where: { id },
      data: sentimentByPost,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.prismaService.sentimentByPost.delete({ where: { id } });
  }
}
