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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const credentials_dto_1 = require("./dto/credentials.dto");
const refresh_token_dto_1 = require("./dto/refresh-token.dto");
const create_access_token_use_case_1 = require("./use-cases/create-access-token.use-case");
const refresh_token_use_case_1 = require("./use-cases/refresh-token.use-case");
let AuthController = class AuthController {
    constructor(createAccessTokenUseCase, refreshTokenUseCase) {
        this.createAccessTokenUseCase = createAccessTokenUseCase;
        this.refreshTokenUseCase = refreshTokenUseCase;
    }
    create(credentials) {
        return this.createAccessTokenUseCase.execute(credentials);
    }
    refreshToken(refreshToken) {
        return this.refreshTokenUseCase.execute(refreshToken);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("token"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credentials_dto_1.CredentialsDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("refresh-token"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_token_dto_1.RefreshTokenDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshToken", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [create_access_token_use_case_1.CreateAccessTokenUseCase,
        refresh_token_use_case_1.RefreshTokenUseCase])
], AuthController);
//# sourceMappingURL=auth.controller.js.map