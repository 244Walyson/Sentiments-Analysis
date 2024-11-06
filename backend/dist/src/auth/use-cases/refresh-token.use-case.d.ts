import { RefreshTokenDto } from "../dto/refresh-token.dto";
import { AccessTokenDto } from "../dto/access-token.dto";
import { FindUserByEmailUseCase } from "src/user/use-cases/find-user-by-email.use-case";
export declare class RefreshTokenUseCase {
    private readonly findByRefreshTokenUseCase;
    constructor(findByRefreshTokenUseCase: FindUserByEmailUseCase);
    execute(refreshToken: RefreshTokenDto): Promise<AccessTokenDto>;
}
