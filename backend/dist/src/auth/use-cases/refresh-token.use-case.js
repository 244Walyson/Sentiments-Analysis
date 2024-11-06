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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenUseCase = void 0;
const access_token_dto_1 = require("../dto/access-token.dto");
const common_1 = require("@nestjs/common");
const find_user_by_email_use_case_1 = require("../../user/use-cases/find-user-by-email.use-case");
let RefreshTokenUseCase = class RefreshTokenUseCase {
    constructor(findByRefreshTokenUseCase) {
        this.findByRefreshTokenUseCase = findByRefreshTokenUseCase;
    }
    async execute(refreshToken) {
        return new access_token_dto_1.AccessTokenDto({});
    }
};
exports.RefreshTokenUseCase = RefreshTokenUseCase;
exports.RefreshTokenUseCase = RefreshTokenUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_user_by_email_use_case_1.FindUserByEmailUseCase])
], RefreshTokenUseCase);
//# sourceMappingURL=refresh-token.use-case.js.map