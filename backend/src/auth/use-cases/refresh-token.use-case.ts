import { RefreshTokenDto } from "../dto/refresh-token.dto";
import {
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { RefreshTokenRepositoryInterface } from "../repositories/refresh-token.repository.interface";
import * as bcrypt from "bcryptjs";
import { CreateAccessTokenUseCase } from "./create-access-token.use-case";
import { CustomException } from "src/exceptions/custom.exception";

@Injectable()
export class RefreshTokenUseCase {
  constructor(
    @Inject("RefreshTokenRepositoryInterface")
    private readonly refreshTokenRepository: RefreshTokenRepositoryInterface,
    private readonly createAccessToken: CreateAccessTokenUseCase
  ) {}

  async execute(refreshToken: RefreshTokenDto) {
    const refresh_token = refreshToken.refresh_token;
    const refreshTokenRec =
      await this.refreshTokenRepository.findOne(refresh_token);

    if (!refreshTokenRec) {
      throw new CustomException(
        "Unauthorized",
        "Invalid refresh token",
        HttpStatus.UNAUTHORIZED
      );
    }
    if (refreshTokenRec.revoked) {
      this.refreshTokenRepository.revokeAll(refreshTokenRec.userId);
      throw new CustomException(
        "Unauthorized",
        "Invalid refresh token",
        HttpStatus.UNAUTHORIZED
      );
    }

    await this.refreshTokenRepository.revoke(refreshTokenRec.id);

    const { email } = refreshTokenRec;
    return await this.createAccessToken.execute(
      { email, password: undefined },
      false
    );
  }
}
