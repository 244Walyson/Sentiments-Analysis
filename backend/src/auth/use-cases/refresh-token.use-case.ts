import { RefreshTokenDto } from "../dto/refresh-token.dto";
import { AccessTokenDto } from "../dto/access-token.dto";
import { Injectable } from "@nestjs/common";
import { FindUserByEmailUseCase } from "src/user/use-cases/find-user-by-email.use-case";

@Injectable()
export class RefreshTokenUseCase {
  constructor(
    private readonly findByRefreshTokenUseCase: FindUserByEmailUseCase
  ) {}

  async execute(refreshToken: RefreshTokenDto) {
    return new AccessTokenDto({});
  }
}
