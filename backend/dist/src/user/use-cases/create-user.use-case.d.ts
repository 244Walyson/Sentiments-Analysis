import { UserRepositoryInterface } from "../repository/user.repository.interface";
import { CreateUserDto } from "../dto/create-user.dto";
import { ResponseUserDto } from "../dto/response-user.dto";
export declare class CreateUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(createUserDto: CreateUserDto): Promise<ResponseUserDto>;
}
