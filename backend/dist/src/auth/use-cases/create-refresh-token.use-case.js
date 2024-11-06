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
exports.CreateRefreshTokenUseCase = void 0;
const common_1 = require("@nestjs/common");
const refresh_token_entity_1 = require("../entities/refresh-token.entity");
const crypto = require("crypto");
const refresh_token_dto_1 = require("../dto/refresh-token.dto");
let CreateRefreshTokenUseCase = class CreateRefreshTokenUseCase {
    constructor(refreshTokenRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
    }
    async execute({ userId, email }) {
        const refreshToken = crypto.randomBytes(32).toString("hex");
        const refresh_token = new refresh_token_entity_1.RefreshToken({
            userId,
            email: email,
            refreshToken: refreshToken,
            revoked: false,
        });
        await this.refreshTokenRepository.create(refresh_token);
        return new refresh_token_dto_1.RefreshTokenDto({ refresh_token: refreshToken });
    }
};
exports.CreateRefreshTokenUseCase = CreateRefreshTokenUseCase;
exports.CreateRefreshTokenUseCase = CreateRefreshTokenUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("RefreshTokenRepositoryInterface")),
    __metadata("design:paramtypes", [Object])
], CreateRefreshTokenUseCase);
//# sourceMappingURL=create-refresh-token.use-case.js.map