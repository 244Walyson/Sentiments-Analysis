import { PrismaService } from "src/prisma.service";
import { CommentRepositoryInterface } from "./comment-repository.interface";
import { Prisma } from "@prisma/client";
export declare class CommentRepositoryImpl implements CommentRepositoryInterface {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(comment: Prisma.CommentCreateInput): Promise<any>;
    update(id: string, comment: any): Promise<any>;
    findAllByPost(id: string): Promise<any>;
    delete(id: string): Promise<any>;
}
