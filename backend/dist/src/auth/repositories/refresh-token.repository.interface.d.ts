import { RefreshToken } from "../entities/refresh-token.entity";
export interface RefreshTokenRepositoryInterface {
    create: (refreshToken: RefreshToken) => Promise<RefreshToken>;
    revoke: (id: string) => Promise<any>;
    findOne: (refreshToken: string) => Promise<RefreshToken>;
    revokeAll: (userId: string) => Promise<any>;
}
