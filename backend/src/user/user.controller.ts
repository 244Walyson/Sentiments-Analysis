import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserUseCase } from "./use-cases/create-user.use-case";
import { DeleteUserUseCase } from "./use-cases/delete-user.use-case";
import { FindUserUseCase } from "./use-cases/find-user.use-case";
import { UpdateUserUseCase } from "./use-cases/update-user.use-case";

@Controller("users")
export class UserController {
  constructor(
    private readonly createUseCase: CreateUserUseCase,
    private readonly updateUseCase: UpdateUserUseCase,
    private readonly findUseCase: FindUserUseCase,
    private readonly deleteUseCase: DeleteUserUseCase
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUseCase.execute(createUserDto);
  }

  @Get("/company/:companyId")
  findAll(params: { companyId: string }) {
    return "This action returns all users";
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.findUseCase.execute(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUseCase.execute(id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.deleteUseCase.execute(id);
  }
}
