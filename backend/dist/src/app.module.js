"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const user_module_1 = require("./user/user.module");
const prisma_service_1 = require("./prisma.service");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const http_exception_filter_1 = require("./exceptions/http-exception.filter");
const post_module_1 = require("./post/post.module");
const engagement_module_1 = require("./engagement/engagement.module");
const audience_module_1 = require("./audience/audience.module");
const sentiment_module_1 = require("./sentiment/sentiment.module");
const rabbit_mq_module_1 = require("./rabbit-mq/rabbit-mq.module");
const company_module_1 = require("./company/company.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            post_module_1.PostModule,
            engagement_module_1.EngagementModule,
            audience_module_1.AudienceModule,
            sentiment_module_1.SentimentModule,
            rabbit_mq_module_1.RabbitMqModule,
            company_module_1.CompanyModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.HttpExceptionFilter,
            },
        ],
        exports: [prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map