import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ResponseUserDto } from "../dto/response-user.dto";
import { UserRepositoryInterface } from "../repositories/user.repository.interface";

@Injectable()
export class FindUserByEmailUseCase {
  constructor(
    @Inject("UserRepositoryInterface")
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.findByEmail(id);

    if (!user) {
      throw new NotFoundException("User not found");
    }
    const { password: _, ...userResponse } = user;
    return new ResponseUserDto(userResponse);
  }

  async executeWithPassword(email: string, includePassword = false) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }
}
