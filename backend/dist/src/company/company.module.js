"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const company_controller_1 = require("./company.controller");
const find_company_use_case_1 = require("./use-cases/find-company.use-case");
const company_repository_impl_1 = require("./repositories/company.repository.impl");
let CompanyModule = class CompanyModule {
};
exports.CompanyModule = CompanyModule;
exports.CompanyModule = CompanyModule = __decorate([
    (0, common_1.Module)({
        controllers: [company_controller_1.CompanyController],
        providers: [
            find_company_use_case_1.FindCompanyUseCase,
            {
                provide: "CompanyRepositoryInterface",
                useClass: company_repository_impl_1.CompanyRepositoryImpl,
            },
        ],
        exports: [find_company_use_case_1.FindCompanyUseCase],
    })
], CompanyModule);
//# sourceMappingURL=company.module.js.map