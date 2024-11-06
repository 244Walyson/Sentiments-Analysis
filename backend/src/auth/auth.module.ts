import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { jwtConstants } from "./constants";
import { UserModule } from "src/user/user.module";
import { CreateAccessTokenUseCase } from "./use-cases/create-access-token.use-case";
import { RefreshTokenUseCase } from "./use-cases/refresh-token.use-case";
import { RefreshTokenRepositoryImpl } from "./repositories/refresh-token.repository.impl";
import { CreateRefreshTokenUseCase } from "./use-cases/create-refresh-token.use-case";
import { PrismaService } from "../prisma.service";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  providers: [
    CreateAccessTokenUseCase,
    RefreshTokenUseCase,
    CreateRefreshTokenUseCase,
    PrismaService,
    {
      provide: "RefreshTokenRepositoryInterface",
      useClass: RefreshTokenRepositoryImpl,
    },
  ],
  controllers: [AuthController],
  exports: [CreateAccessTokenUseCase, RefreshTokenUseCase],
})
export class AuthModule {}
