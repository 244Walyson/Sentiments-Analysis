import { CredentialsDto } from "../dto/credentials.dto";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { AccessTokenDto } from "../dto/access-token.dto";
import { jwtConstants } from "../constants";
import { FindUserByEmailUseCase } from "src/user/use-cases/find-user-by-email.use-case";
import { CreateRefreshTokenUseCase } from "./create-refresh-token.use-case";

@Injectable()
export class CreateAccessTokenUseCase {
  constructor(
    private readonly findUserByEmail: FindUserByEmailUseCase,
    private readonly jwt: JwtService,
    private readonly createRefreshTokenUseCase: CreateRefreshTokenUseCase
  ) {}

  async execute(credentials: CredentialsDto, withPassword: boolean = true) {
    const { email, password } = credentials;

    const user = await this.findUserByEmail.executeWithPassword(email);

    if (withPassword && !bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payload = { sub: user.id, email: user.username };
    const access_token = await this.jwt.signAsync(payload);
    const expires_in = jwtConstants.expiresIn;
    const { refresh_token } = await this.createRefreshTokenUseCase.execute({
      userId: user.id,
      email: user.email,
    });

    return new AccessTokenDto({
      access_token,
      token_type: "Bearer",
      expires_in,
      refresh_token,
    });
  }
}
