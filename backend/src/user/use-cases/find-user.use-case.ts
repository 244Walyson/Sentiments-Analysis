import { Inject, Injectable } from "@nestjs/common";
import { UserRepositoryInterface } from "../repository/user.repository.interface";
import { ResponseUserDto } from "../dto/response-user.dto";

@Injectable()
export class FindUserUseCase {
  constructor(
    @Inject("UserRepositoryInterface")
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.findOne(id);
    return new ResponseUserDto({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }
}
