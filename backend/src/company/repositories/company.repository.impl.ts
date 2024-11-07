import { PrismaService } from "src/prisma.service";
import { CompanyRepositoryInterface } from "./company.repository.interface";

export class CompanyRepositoryImpl implements CompanyRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create(company: any): Promise<any> {
    return await this.prismaService.company.create({ data: company });
  }
  async update(id: string, company: any): Promise<any> {
    return await this.prismaService.company.update({
      where: { id },
      data: company,
    });
  }
  async findAll(): Promise<any> {
    return await this.prismaService.company.findMany();
  }
  async findById(id: string): Promise<any> {
    return await this.prismaService.company.findUnique({ where: { id } });
  }
  async delete(id: string): Promise<any> {
    return await this.prismaService.company.delete({ where: { id } });
  }
}
