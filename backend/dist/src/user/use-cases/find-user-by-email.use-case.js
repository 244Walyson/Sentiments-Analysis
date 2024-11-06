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
exports.FindUserByEmailUseCase = void 0;
const common_1 = require("@nestjs/common");
const response_user_dto_1 = require("../dto/response-user.dto");
let FindUserByEmailUseCase = class FindUserByEmailUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const user = await this.userRepository.findByEmail(id);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const { password: _, ...userResponse } = user;
        return new response_user_dto_1.ResponseUserDto(userResponse);
    }
    async executeWithPassword(email, includePassword = false) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        return user;
    }
};
exports.FindUserByEmailUseCase = FindUserByEmailUseCase;
exports.FindUserByEmailUseCase = FindUserByEmailUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("UserRepositoryInterface")),
    __metadata("design:paramtypes", [Object])
], FindUserByEmailUseCase);
//# sourceMappingURL=find-user-by-email.use-case.js.map