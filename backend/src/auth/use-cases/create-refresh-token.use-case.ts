import { Inject, Injectable } from "@nestjs/common";
import { RefreshTokenRepositoryInterface } from "../repositories/refresh-token.repository.interface";
import { RefreshToken } from "../entities/refresh-token.entity";
import * as crypto from "crypto";
import { RefreshTokenDto } from "../dto/refresh-token.dto";

@Injectable()
export class CreateRefreshTokenUseCase {
  constructor(
    @Inject("RefreshTokenRepositoryInterface")
    private readonly refreshTokenRepository: RefreshTokenRepositoryInterface
  ) {}

  async execute({ userId, email }: { userId: string; email: string }) {
    const refreshToken = crypto.randomBytes(32).toString("hex");
    const refresh_token = new RefreshToken({
      userId,
      email: email,
      refreshToken: refreshToken,
      revoked: false,
    });

    await this.refreshTokenRepository.create(refresh_token);

    return new RefreshTokenDto({ refresh_token: refreshToken });
  }
}
