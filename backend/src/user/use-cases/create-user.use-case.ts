import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepositoryInterface } from "../repositories/user.repository.interface";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { ResponseUserDto } from "../dto/response-user.dto";
import * as bcrypt from "bcryptjs";
import { CustomException } from "../../exceptions/custom.exception";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject("UserRepositoryInterface")
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(createUserDto: CreateUserDto) {
    try {
      const password = await bcrypt.hash(createUserDto.password, 10);
      const user = new User({
        name: createUserDto.name,
        email: createUserDto.email,
        password: password,
        username: createUserDto.username,
        birthday: createUserDto.birthday,
        gender: createUserDto.gender,
        phoneNumber: createUserDto.phoneNumber,
        instagramUrl: createUserDto.instagramUrl,
        xUrl: createUserDto.xUrl,
        imgUrl: createUserDto.xUrl,
        bio: createUserDto.imgUrl,
        cpf: createUserDto.cpf,
      });
      console.log(user);
      const createdUser = await this.userRepository.create(user);
      const { password: _, ...userResponse } = createdUser;
      return new ResponseUserDto({
        ...userResponse,
      });
    } catch (error) {
      throw new CustomException(
        "Error creating user",
        error.message,
        HttpStatus.BAD_REQUEST
      );
    }
  }
}
