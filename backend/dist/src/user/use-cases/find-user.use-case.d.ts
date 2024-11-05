import { UserRepositoryInterface } from "../repository/user.repository.interface";
import { ResponseUserDto } from "../dto/response-user.dto";
export declare class FindUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(id: string): Promise<ResponseUserDto>;
}
