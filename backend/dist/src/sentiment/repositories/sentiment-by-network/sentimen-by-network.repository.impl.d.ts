import { PrismaService } from "../../../prisma.service";
import { SentimentByNetworkRepositoryInterface } from "./sentimen-by-network.repository.interface";
export declare class SentimentByNetworkRepositoryImpl implements SentimentByNetworkRepositoryInterface {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(sentimentByNetwork: any): Promise<any>;
    findAllByCompany(companyId: string): Promise<any[]>;
    findByCompanyAndNetwork(companyId: string, network: string): Promise<any>;
    update(id: string, sentimentByNetwork: any): Promise<any>;
    delete(id: string): Promise<any>;
}
