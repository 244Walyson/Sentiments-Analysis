import { PrismaService } from "src/prisma.service";
import { CompanyRepositoryInterface } from "./company.repository.interface";
export declare class CompanyRepositoryImpl implements CompanyRepositoryInterface {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(company: any): Promise<any>;
    update(id: string, company: any): Promise<any>;
    findAll(): Promise<any>;
    findById(id: string): Promise<any>;
    delete(id: string): Promise<any>;
}
