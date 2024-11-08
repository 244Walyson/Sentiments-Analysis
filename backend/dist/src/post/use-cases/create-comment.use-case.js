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
exports.CreateCommentUseCase = void 0;
const custom_exception_1 = require("../../exceptions/custom.exception");
const response_comment_dto_1 = require("../dto/response-comment.dto");
const find_post_use_case_1 = require("./find-post.use-case");
const common_1 = require("@nestjs/common");
const comment_entity_1 = require("../entities/comment.entity");
let CreateCommentUseCase = class CreateCommentUseCase {
    constructor(commentRepository, findPostUseCase, rabbitMqService) {
        this.commentRepository = commentRepository;
        this.findPostUseCase = findPostUseCase;
        this.rabbitMqService = rabbitMqService;
    }
    async execute(data) {
        try {
            await this.findPostUseCase.execute(data.postId);
            const comment = new comment_entity_1.Comment({ ...data });
            const createdComment = await this.commentRepository.create(data);
            const commentResponse = new response_comment_dto_1.ResponseCommentDto({ ...createdComment });
            await this.sendCommentToRabbitMQ(commentResponse);
            return commentResponse;
        }
        catch (error) {
            console.log(error);
            throw new custom_exception_1.CustomException("Bad Request", "Error creating comment", 400);
        }
    }
    async sendCommentToRabbitMQ(comment) {
        await this.rabbitMqService.publish("comments-queue", comment);
    }
};
exports.CreateCommentUseCase = CreateCommentUseCase;
exports.CreateCommentUseCase = CreateCommentUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CommentRepositoryInterface")),
    __param(2, (0, common_1.Inject)("MessageQueue")),
    __metadata("design:paramtypes", [Object, find_post_use_case_1.FindPostUseCase, Object])
], CreateCommentUseCase);
//# sourceMappingURL=create-comment.use-case.js.map