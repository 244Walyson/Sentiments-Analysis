import { UserRepositoryInterface } from "../repository/user.repository.interface";
import { UpdateUserDto } from "../dto/update-user.dto";
import { ResponseUserDto } from "../dto/response-user.dto";
export declare class UpdateUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(id: string, updateUserDto: UpdateUserDto): Promise<ResponseUserDto>;
}
