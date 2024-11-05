import { Inject, Injectable } from "@nestjs/common";
import { UserRepositoryInterface } from "../repository/user.repository.interface";

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject("UserRepositoryInterface")
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(id: string) {
    return await this.userRepository.delete(id);
  }
}
