import { CredentialsDto } from "../dto/credentials.dto";
import { UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AccessTokenDto } from "../dto/access-token.dto";
import { FindUserByEmailUseCase } from "src/user/use-cases/find-user-by-email.use-case";
export declare class CreateAccessTokenUseCase {
    private readonly findUserByEmail;
    private readonly jwt;
    constructor(findUserByEmail: FindUserByEmailUseCase, jwt: JwtService);
    execute(credentials: CredentialsDto): Promise<AccessTokenDto | UnauthorizedException>;
}
