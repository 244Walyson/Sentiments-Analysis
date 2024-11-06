import { CredentialsDto } from "../dto/credentials.dto";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import * as crypto from "crypto";
import { AccessTokenDto } from "../dto/access-token.dto";
import { jwtConstants } from "../constants";
import { FindUserByEmailUseCase } from "src/user/use-cases/find-user-by-email.use-case";

@Injectable()
export class CreateAccessTokenUseCase {
  constructor(
    private readonly findUserByEmail: FindUserByEmailUseCase,
    private readonly jwt: JwtService
  ) {}

  async execute(credentials: CredentialsDto) {
    const { email, password } = credentials;

    const user = await this.findUserByEmail.executeWithPassword(email);

    if (await !bcrypt.compare(password, user.password)) {
      return new UnauthorizedException("Invalid credentials");
    }

    const payload = { sub: user.id, email: user.username };
    const access_token = await this.jwt.signAsync(payload);
    const refresh_token = crypto.randomBytes(32).toString("hex");
    const expires_in = jwtConstants.expiresIn;

    return new AccessTokenDto({
      access_token,
      token_type: "Bearer",
      expires_in,
      refresh_token,
    });
  }
}
