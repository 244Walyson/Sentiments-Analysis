import { Inject, Injectable } from "@nestjs/common";
import { UserRepositoryInterface } from "../repository/user.repository.interface";
import { UpdateUserDto } from "../dto/update-user.dto";
import { User } from "../entities/user.entity";
import { ResponseUserDto } from "../dto/response-user.dto";

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject("UserRepositoryInterface")
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(id: string, updateUserDto: UpdateUserDto) {
    const user = new User({
      name: updateUserDto.name,
      email: updateUserDto.email,
    });
    const updatedUser = await this.userRepository.update(id, user);
    return new ResponseUserDto({
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  }
}
