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
exports.CreateAccessTokenUseCase = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const access_token_dto_1 = require("../dto/access-token.dto");
const constants_1 = require("../constants");
const find_user_by_email_use_case_1 = require("../../user/use-cases/find-user-by-email.use-case");
const create_refresh_token_use_case_1 = require("./create-refresh-token.use-case");
let CreateAccessTokenUseCase = class CreateAccessTokenUseCase {
    constructor(findUserByEmail, jwt, createRefreshTokenUseCase) {
        this.findUserByEmail = findUserByEmail;
        this.jwt = jwt;
        this.createRefreshTokenUseCase = createRefreshTokenUseCase;
    }
    async execute(credentials, withPassword = true) {
        const { email, password } = credentials;
        const user = await this.findUserByEmail.executeWithPassword(email);
        if (withPassword && !bcrypt.compareSync(password, user.password)) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        const payload = { sub: user.id, email: user.username };
        const access_token = await this.jwt.signAsync(payload);
        const expires_in = constants_1.jwtConstants.expiresIn;
        const { refresh_token } = await this.createRefreshTokenUseCase.execute({
            userId: user.id,
            email: user.email,
        });
        return new access_token_dto_1.AccessTokenDto({
            access_token,
            token_type: "Bearer",
            expires_in,
            refresh_token,
        });
    }
};
exports.CreateAccessTokenUseCase = CreateAccessTokenUseCase;
exports.CreateAccessTokenUseCase = CreateAccessTokenUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_user_by_email_use_case_1.FindUserByEmailUseCase,
        jwt_1.JwtService,
        create_refresh_token_use_case_1.CreateRefreshTokenUseCase])
], CreateAccessTokenUseCase);
//# sourceMappingURL=create-access-token.use-case.js.map