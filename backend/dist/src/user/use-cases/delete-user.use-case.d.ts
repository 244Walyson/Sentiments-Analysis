import { UserRepositoryInterface } from "../repositories/user.repository.interface";
export declare class DeleteUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(id: string): Promise<void>;
}
