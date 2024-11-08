import { PrismaService } from "../../../prisma.service";
import { SentimentByNetworkRepositoryInterface } from "./sentimen-by-network.repository.interface";

export class SentimentByNetworkRepositoryImpl
  implements SentimentByNetworkRepositoryInterface
{
  constructor(private readonly prismaService: PrismaService) {}

  async create(sentimentByNetwork: any): Promise<any> {
    return await this.prismaService.sentimentByNetwork.create({
      data: sentimentByNetwork,
    });
  }
  async findAllByCompany(companyId: string): Promise<any[]> {
    return await this.prismaService.sentimentByNetwork.findMany({
      where: {
        companyId,
      },
    });
  }
  async findByCompanyAndNetwork(
    companyId: string,
    network: string
  ): Promise<any> {
    return await this.prismaService.sentimentByNetwork.findFirst({
      where: {
        companyId,
        network,
      },
    });
  }
  async update(id: string, sentimentByNetwork: any): Promise<any> {
    return await this.prismaService.sentimentByNetwork.update({
      where: {
        id,
      },
      data: sentimentByNetwork,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.prismaService.sentimentByNetwork.delete({
      where: {
        id,
      },
    });
  }
}
