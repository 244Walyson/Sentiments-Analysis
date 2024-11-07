import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepositoryImpl } from "./repositories/user.repository.impl";
import { CreateUserUseCase } from "./use-cases/create-user.use-case";
import { UpdateUserUseCase } from "./use-cases/update-user.use-case";
import { FindUserUseCase } from "./use-cases/find-user.use-case";
import { DeleteUserUseCase } from "./use-cases/delete-user.use-case";
import { FindUserByEmailUseCase } from "./use-cases/find-user-by-email.use-case";
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    UpdateUserUseCase,
    FindUserUseCase,
    DeleteUserUseCase,
    PrismaService,
    FindUserByEmailUseCase,
    {
      provide: "UserRepositoryInterface",
      useClass: UserRepositoryImpl,
    },
  ],
  exports: [FindUserByEmailUseCase],
})
export class UserModule {}
