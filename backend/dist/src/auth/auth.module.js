"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./auth.controller");
const constants_1 = require("./constants");
const user_module_1 = require("../user/user.module");
const create_access_token_use_case_1 = require("./use-cases/create-access-token.use-case");
const refresh_token_use_case_1 = require("./use-cases/refresh-token.use-case");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: constants_1.jwtConstants.expiresIn },
            }),
        ],
        providers: [create_access_token_use_case_1.CreateAccessTokenUseCase, refresh_token_use_case_1.RefreshTokenUseCase],
        controllers: [auth_controller_1.AuthController],
        exports: [create_access_token_use_case_1.CreateAccessTokenUseCase, refresh_token_use_case_1.RefreshTokenUseCase],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map