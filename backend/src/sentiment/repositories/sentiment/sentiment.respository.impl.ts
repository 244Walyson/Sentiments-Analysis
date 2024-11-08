import { PrismaService } from "../../../prisma.service";
import { SentimentRepositoryInterface } from "./sentiment.repository.interface";

export class SentimentRepositoryImpl implements SentimentRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(sentiment: any): Promise<any> {
    return await this.prismaService.sentiment.create({ data: sentiment });
  }
  async update(id: string, sentiment: any): Promise<any> {
    return await this.prismaService.sentiment.update({
      where: { id },
      data: sentiment,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.prismaService.sentiment.delete({ where: { id } });
  }
}
