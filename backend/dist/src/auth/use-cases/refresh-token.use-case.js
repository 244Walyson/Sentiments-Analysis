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
exports.RefreshTokenUseCase = void 0;
const common_1 = require("@nestjs/common");
const create_access_token_use_case_1 = require("./create-access-token.use-case");
const custom_exception_1 = require("../../exceptions/custom.exception");
let RefreshTokenUseCase = class RefreshTokenUseCase {
    constructor(refreshTokenRepository, createAccessToken) {
        this.refreshTokenRepository = refreshTokenRepository;
        this.createAccessToken = createAccessToken;
    }
    async execute(refreshToken) {
        const refresh_token = refreshToken.refresh_token;
        const refreshTokenRec = await this.refreshTokenRepository.findOne(refresh_token);
        if (!refreshTokenRec) {
            throw new custom_exception_1.CustomException("Unauthorized", "Invalid refresh token", common_1.HttpStatus.UNAUTHORIZED);
        }
        if (refreshTokenRec.revoked) {
            this.refreshTokenRepository.revokeAll(refreshTokenRec.userId);
            throw new custom_exception_1.CustomException("Unauthorized", "Invalid refresh token", common_1.HttpStatus.UNAUTHORIZED);
        }
        await this.refreshTokenRepository.revoke(refreshTokenRec.id);
        const { email } = refreshTokenRec;
        return await this.createAccessToken.execute({ email, password: undefined }, false);
    }
};
exports.RefreshTokenUseCase = RefreshTokenUseCase;
exports.RefreshTokenUseCase = RefreshTokenUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("RefreshTokenRepositoryInterface")),
    __metadata("design:paramtypes", [Object, create_access_token_use_case_1.CreateAccessTokenUseCase])
], RefreshTokenUseCase);
//# sourceMappingURL=refresh-token.use-case.js.map