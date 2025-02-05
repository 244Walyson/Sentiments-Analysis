"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_repository_impl_1 = require("./repositories/user.repository.impl");
const create_user_use_case_1 = require("./use-cases/create-user.use-case");
const update_user_use_case_1 = require("./use-cases/update-user.use-case");
const find_user_use_case_1 = require("./use-cases/find-user.use-case");
const delete_user_use_case_1 = require("./use-cases/delete-user.use-case");
const find_user_by_email_use_case_1 = require("./use-cases/find-user-by-email.use-case");
const prisma_service_1 = require("../prisma.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_controller_1.UserController],
        providers: [
            create_user_use_case_1.CreateUserUseCase,
            update_user_use_case_1.UpdateUserUseCase,
            find_user_use_case_1.FindUserUseCase,
            delete_user_use_case_1.DeleteUserUseCase,
            prisma_service_1.PrismaService,
            find_user_by_email_use_case_1.FindUserByEmailUseCase,
            {
                provide: "UserRepositoryInterface",
                useClass: user_repository_impl_1.UserRepositoryImpl,
            },
        ],
        exports: [find_user_by_email_use_case_1.FindUserByEmailUseCase],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map