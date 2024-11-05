"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entities/user.entity");
const response_user_dto_1 = require("../dto/response-user.dto");
const bcrypt = require("bcryptjs");
let CreateUserUseCase = class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(createUserDto) {
        const password = await bcrypt.hash(createUserDto.password, 10);
        const user = new user_entity_1.User({
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
        return new response_user_dto_1.ResponseUserDto({
            ...userResponse,
        });
    }
};
exports.CreateUserUseCase = CreateUserUseCase;
exports.CreateUserUseCase = CreateUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("UserRepositoryInterface")),
    __metadata("design:paramtypes", [Object])
], CreateUserUseCase);
//# sourceMappingURL=create-user.use-case.js.map