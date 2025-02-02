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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const create_post_dto_1 = require("./dto/create-post.dto");
const create_comment_use_case_1 = require("./use-cases/create-comment.use-case");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const create_post_use_case_1 = require("./use-cases/create-post.use-case");
const get_instagram_posts_by_user_id_use_case_1 = require("./use-cases/get-instagram-posts-by-user-id.use-case");
let PostController = class PostController {
    constructor(createCommentUseCase, createPostUseCase, getInstagramPostUseCase) {
        this.createCommentUseCase = createCommentUseCase;
        this.createPostUseCase = createPostUseCase;
        this.getInstagramPostUseCase = getInstagramPostUseCase;
    }
    async createPost(createPostDto) {
        return await this.createPostUseCase.execute(createPostDto);
    }
    async getPosts(params) {
        return await this.getInstagramPostUseCase.execute(params.userId);
    }
    async createComment(commentDto) {
        return await this.createCommentUseCase.execute(commentDto);
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Post)("instagram/:userId"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPosts", null);
__decorate([
    (0, common_1.Post)("comment"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createComment", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)("post"),
    __metadata("design:paramtypes", [create_comment_use_case_1.CreateCommentUseCase,
        create_post_use_case_1.CreatePostUseCase,
        get_instagram_posts_by_user_id_use_case_1.GetInstagramPostUseCase])
], PostController);
//# sourceMappingURL=post.controller.js.map