"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModule = void 0;
const common_1 = require("@nestjs/common");
const post_controller_1 = require("./post.controller");
const rabbit_mq_service_1 = require("../rabbit-mq/rabbit-mq.service");
const create_post_use_case_1 = require("./use-cases/create-post.use-case");
const create_comment_use_case_1 = require("./use-cases/create-comment.use-case");
const find_post_use_case_1 = require("./use-cases/find-post.use-case");
const post_repository_impl_1 = require("./repositories/post.repository.impl");
const comment_repository_impl_1 = require("./repositories/comment-repository.impl");
const prisma_service_1 = require("../prisma.service");
let PostModule = class PostModule {
};
exports.PostModule = PostModule;
exports.PostModule = PostModule = __decorate([
    (0, common_1.Module)({
        controllers: [post_controller_1.PostController],
        providers: [
            rabbit_mq_service_1.RabbitMQService,
            create_post_use_case_1.CreatePostUseCase,
            create_comment_use_case_1.CreateCommentUseCase,
            find_post_use_case_1.FindPostUseCase,
            prisma_service_1.PrismaService,
            {
                provide: "PostRepositoryInterface",
                useClass: post_repository_impl_1.PostRepositoryImpl,
            },
            {
                provide: "CommentRepositoryInterface",
                useClass: comment_repository_impl_1.CommentRepositoryImpl,
            },
        ],
    })
], PostModule);
//# sourceMappingURL=post.module.js.map