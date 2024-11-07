import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepositoryInterface } from "../repositories/user.repository.interface";
import { ResponseUserDto } from "../dto/response-user.dto";

@Injectable()
export class FindUserUseCase {
  constructor(
    @Inject("UserRepositoryInterface")
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(id: string) {
    try {
      const { password: _, ...user } = await this.userRepository.findOne(id);
      return new ResponseUserDto({
        ...user,
      });
    } catch (error) {
      throw new NotFoundException("User not found");
    }
  }
}
