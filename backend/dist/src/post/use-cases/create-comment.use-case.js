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
var CreateCommentUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentUseCase = void 0;
const response_comment_dto_1 = require("../dto/response-comment.dto");
const find_post_use_case_1 = require("./find-post.use-case");
const common_1 = require("@nestjs/common");
const comment_entity_1 = require("../entities/comment.entity");
let CreateCommentUseCase = CreateCommentUseCase_1 = class CreateCommentUseCase {
    constructor(commentRepository, findPostUseCase, rabbitMqService) {
        this.commentRepository = commentRepository;
        this.findPostUseCase = findPostUseCase;
        this.rabbitMqService = rabbitMqService;
        this.logger = new common_1.Logger(CreateCommentUseCase_1.name);
    }
    async execute(data, traceId) {
        try {
            traceId = traceId || crypto.randomUUID();
            this.logger.log(`[${traceId}] Creating comment for post id: ${data.postId}`);
            await this.findPostUseCase.execute(data.postId, traceId);
            const comment = new comment_entity_1.Comment({ ...data });
            const createdComment = await this.commentRepository.create(comment);
            const commentResponse = new response_comment_dto_1.ResponseCommentDto({ ...createdComment });
            await this.sendCommentToRabbitMQ(commentResponse, traceId);
            this.logger.log(`[${traceId}] Comment created successfully for post id: ${data.postId}`);
            return commentResponse;
        }
        catch (error) {
            this.logger.error(`[${traceId}] Error creating comment: `, error);
            throw new common_1.BadRequestException(`[${traceId}] Error creating comment`);
        }
    }
    async sendCommentToRabbitMQ(comment, traceId) {
        const data = { traceId, ...comment };
        await this.rabbitMqService.publish("comments-queue", data, traceId);
    }
};
exports.CreateCommentUseCase = CreateCommentUseCase;
exports.CreateCommentUseCase = CreateCommentUseCase = CreateCommentUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CommentRepositoryInterface")),
    __param(2, (0, common_1.Inject)("MessageQueue")),
    __metadata("design:paramtypes", [Object, find_post_use_case_1.FindPostUseCase, Object])
], CreateCommentUseCase);
//# sourceMappingURL=create-comment.use-case.js.map