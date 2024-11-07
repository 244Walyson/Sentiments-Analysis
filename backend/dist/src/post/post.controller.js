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
let PostController = class PostController {
    constructor(createCommentUseCase, createPostUseCase) {
        this.createCommentUseCase = createCommentUseCase;
        this.createPostUseCase = createPostUseCase;
    }
    createPost(createPostDto) {
        return this.createPostUseCase.execute(createPostDto);
    }
    createComment(commentDto) {
        return this.createCommentUseCase.execute(commentDto);
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Post)("comment"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "createComment", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)("post"),
    __metadata("design:paramtypes", [create_comment_use_case_1.CreateCommentUseCase,
        create_post_use_case_1.CreatePostUseCase])
], PostController);
//# sourceMappingURL=post.controller.js.map