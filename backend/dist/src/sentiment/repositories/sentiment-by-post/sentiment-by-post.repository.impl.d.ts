import { SentimentByPostRepositoryInterface } from "./sentiment-by-post.repository.interface";
import { PrismaService } from "../../../prisma.service";
export declare class SentimentByPostRepositoryImpl implements SentimentByPostRepositoryInterface {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<any[]>;
    findOneByNetwork(network: string): Promise<any>;
    create(sentimentByPost: any): Promise<any>;
    update(id: string, sentimentByPost: any): Promise<any>;
    delete(id: string): Promise<any>;
}
