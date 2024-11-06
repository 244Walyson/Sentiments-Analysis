import { ResponseUserDto } from "../dto/response-user.dto";
import { UserRepositoryInterface } from "../repository/user.repository.interface";
export declare class FindUserByEmailUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(id: string): Promise<ResponseUserDto>;
    executeWithPassword(email: string, includePassword?: boolean): Promise<import("../entities/user.entity").User>;
}
