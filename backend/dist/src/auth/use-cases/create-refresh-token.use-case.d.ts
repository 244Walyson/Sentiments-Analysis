import { RefreshTokenRepositoryInterface } from "../repositories/refresh-token.repository.interface";
import { RefreshTokenDto } from "../dto/refresh-token.dto";
export declare class CreateRefreshTokenUseCase {
    private readonly refreshTokenRepository;
    constructor(refreshTokenRepository: RefreshTokenRepositoryInterface);
    execute({ userId, email }: {
        userId: string;
        email: string;
    }): Promise<RefreshTokenDto>;
}
