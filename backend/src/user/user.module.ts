import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepositoryImpl } from "./repository/user.repository.impl";
import { PrismaService } from "..//prisma.service";
import { CreateUserUseCase } from "./use-cases/create-user.use-case";
import { UpdateUserUseCase } from "./use-cases/update-user.use-case";
import { FindUserUseCase } from "./use-cases/find-user.use-case";
import { DeleteUserUseCase } from "./use-cases/delete-user.use-case";

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    UpdateUserUseCase,
    FindUserUseCase,
    DeleteUserUseCase,
    PrismaService,
    {
      provide: "UserRepositoryInterface",
      useClass: UserRepositoryImpl,
    },
  ],
})
export class UserModule {}