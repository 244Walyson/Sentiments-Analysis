import { PrismaService } from "src/prisma.service";
import { PostRepositoryInterface } from "./post.repository.interface";
export declare class PostRepositoryImpl implements PostRepositoryInterface {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(user: any): Promise<any>;
    update(id: string, user: any): Promise<any>;
    findOne(id: string): Promise<any>;
    delete(id: string): Promise<any>;
}
