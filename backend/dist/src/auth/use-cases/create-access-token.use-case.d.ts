import { CredentialsDto } from "../dto/credentials.dto";
import { JwtService } from "@nestjs/jwt";
import { AccessTokenDto } from "../dto/access-token.dto";
import { FindUserByEmailUseCase } from "src/user/use-cases/find-user-by-email.use-case";
import { CreateRefreshTokenUseCase } from "./create-refresh-token.use-case";
export declare class CreateAccessTokenUseCase {
    private readonly findUserByEmail;
    private readonly jwt;
    private readonly createRefreshTokenUseCase;
    constructor(findUserByEmail: FindUserByEmailUseCase, jwt: JwtService, createRefreshTokenUseCase: CreateRefreshTokenUseCase);
    execute(credentials: CredentialsDto, withPassword?: boolean): Promise<AccessTokenDto>;
}
