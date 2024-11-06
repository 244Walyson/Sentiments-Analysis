import { Controller, Post, Body, UseFilters } from "@nestjs/common";
import { CredentialsDto } from "./dto/credentials.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { CreateAccessTokenUseCase } from "./use-cases/create-access-token.use-case";
import { RefreshTokenUseCase } from "./use-cases/refresh-token.use-case";
import { HttpExceptionFilter } from "src/exceptions/http-exception.filter";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly createAccessTokenUseCase: CreateAccessTokenUseCase,
    private readonly refreshTokenUseCase: RefreshTokenUseCase
  ) {}

  @Post("token")
  create(@Body() credentials: CredentialsDto) {
    return this.createAccessTokenUseCase.execute(credentials);
  }

  @Post("refresh-token")
  refreshToken(@Body() refreshToken: RefreshTokenDto) {
    return this.refreshTokenUseCase.execute(refreshToken);
  }
}
