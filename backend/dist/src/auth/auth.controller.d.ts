import { CredentialsDto } from "./dto/credentials.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { CreateAccessTokenUseCase } from "./use-cases/create-access-token.use-case";
import { RefreshTokenUseCase } from "./use-cases/refresh-token.use-case";
export declare class AuthController {
    private readonly createAccessTokenUseCase;
    private readonly refreshTokenUseCase;
    constructor(createAccessTokenUseCase: CreateAccessTokenUseCase, refreshTokenUseCase: RefreshTokenUseCase);
    create(credentials: CredentialsDto): Promise<import("./dto/access-token.dto").AccessTokenDto>;
    refreshToken(refreshToken: RefreshTokenDto): Promise<import("./dto/access-token.dto").AccessTokenDto>;
}
