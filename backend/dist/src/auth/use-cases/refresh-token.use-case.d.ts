import { RefreshTokenDto } from "../dto/refresh-token.dto";
import { RefreshTokenRepositoryInterface } from "../repositories/refresh-token.repository.interface";
import { CreateAccessTokenUseCase } from "./create-access-token.use-case";
export declare class RefreshTokenUseCase {
    private readonly refreshTokenRepository;
    private readonly createAccessToken;
    constructor(refreshTokenRepository: RefreshTokenRepositoryInterface, createAccessToken: CreateAccessTokenUseCase);
    execute(refreshToken: RefreshTokenDto): Promise<import("../dto/access-token.dto").AccessTokenDto>;
}
