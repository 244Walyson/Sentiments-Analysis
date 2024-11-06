import { PrismaService } from "../../prisma.service";
import { RefreshTokenRepositoryInterface } from "./refresh-token.repository.interface";
import { RefreshToken } from "../entities/refresh-token.entity";
export declare class RefreshTokenRepositoryImpl implements RefreshTokenRepositoryInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(refreshToken: RefreshToken): Promise<RefreshToken>;
    revoke(id: string): Promise<any>;
    findOne(refreshToken: string): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        userId: string;
        refreshToken: string;
        expiresAt: Date | null;
        revoked: boolean;
        ipAddress: string | null;
        userAgent: string | null;
    }>;
    revokeAll(userId: string): Promise<any>;
}
