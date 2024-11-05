import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserUseCase } from "./use-cases/create-user.use-case";
import { DeleteUserUseCase } from "./use-cases/delete-user.use-case";
import { FindUserUseCase } from "./use-cases/find-user.use-case";
import { UpdateUserUseCase } from "./use-cases/update-user.use-case";
export declare class UserController {
    private readonly createUseCase;
    private readonly updateUseCase;
    private readonly findUseCase;
    private readonly deleteUseCase;
    constructor(createUseCase: CreateUserUseCase, updateUseCase: UpdateUserUseCase, findUseCase: FindUserUseCase, deleteUseCase: DeleteUserUseCase);
    create(createUserDto: CreateUserDto): Promise<import("./dto/response-user.dto").ResponseUserDto>;
    findAll(params: {
        companyId: string;
    }): string;
    findOne(id: string): Promise<import("./dto/response-user.dto").ResponseUserDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./dto/response-user.dto").ResponseUserDto>;
    remove(id: string): Promise<void>;
}
