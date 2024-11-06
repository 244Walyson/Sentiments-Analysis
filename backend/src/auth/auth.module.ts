import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { jwtConstants } from "./constants";
import { UserModule } from "src/user/user.module";
import { CreateAccessTokenUseCase } from "./use-cases/create-access-token.use-case";
import { RefreshTokenUseCase } from "./use-cases/refresh-token.use-case";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  providers: [CreateAccessTokenUseCase, RefreshTokenUseCase],
  controllers: [AuthController],
  exports: [CreateAccessTokenUseCase, RefreshTokenUseCase],
})
export class AuthModule {}
