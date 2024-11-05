import { Inject, Injectable } from "@nestjs/common";
import { UserRepositoryInterface } from "../repository/user.repository.interface";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { ResponseUserDto } from "../dto/response-user.dto";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject("UserRepositoryInterface")
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(createUserDto: CreateUserDto) {
    const user = new User({
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
    });
    console.log(user);
    const createdUser = await this.userRepository.create(user);
    return new ResponseUserDto({
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
    });
  }
}
