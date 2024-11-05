import { UserRepositoryInterface } from "./user.repository.interface";
import { User } from "../entities/user.entity";
import { PrismaService } from "../../prisma.service";
import { Prisma } from "@prisma/client";
export declare class UserRepositoryImpl implements UserRepositoryInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.UserCreateInput): Promise<User>;
    findAllByCompanyId(companyId: string): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, data: Prisma.UserUpdateInput): Promise<User>;
    delete(id: string): Promise<void>;
}
