import { PrismaService } from "../../../prisma.service";
import { SentimentRepositoryInterface } from "./sentiment.repository.interface";
export declare class SentimentRepositoryImpl implements SentimentRepositoryInterface {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(sentiment: any): Promise<any>;
    update(id: string, sentiment: any): Promise<any>;
    delete(id: string): Promise<any>;
}
