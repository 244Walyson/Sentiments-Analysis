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
var GetInstagramCommentsUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInstagramCommentsUseCase = void 0;
const common_1 = require("@nestjs/common");
const instagram_client_repository_1 = require("../repositories/instagram-client.repository");
const create_comment_use_case_1 = require("./create-comment.use-case");
let GetInstagramCommentsUseCase = GetInstagramCommentsUseCase_1 = class GetInstagramCommentsUseCase {
    constructor(instagramClientRepository, createCommentUseCase) {
        this.instagramClientRepository = instagramClientRepository;
        this.createCommentUseCase = createCommentUseCase;
        this.logger = new common_1.Logger(GetInstagramCommentsUseCase_1.name);
    }
    async execute(post, traceId) {
        traceId = traceId || crypto.randomUUID();
        this.logger.log(`[${traceId}] Getting comments for post id: ${post.postId}`);
        const accessToken = "IGAB4YHjOso5NBZAE5nbjYxUUl2Mm5vN3pnR2Y3NUhUam4zSEtfVDZAaRmlrbjJ1WXlKN2V3YVhjMjRkM2hKY05xTUZAtNGdkUWZAzcXJkci02WTdtTXR1WDhvZA3VDS3hlVzk1TVhNWktzN1Bqd01mcXF4eURUcDM5eGx3QklOaUN4UDFwSTBEbkFsTmxfMAZDZD";
        let comments;
        try {
            comments = await this.instagramClientRepository.getCommentsByPostId(post.postId, accessToken);
        }
        catch (error) {
            this.logger.error(`[${traceId}] Error getting comments: `, error);
            throw new common_1.BadRequestException(`[${traceId}] Error getting posts`);
        }
        if (!comments || comments.length === 0) {
            this.logger.error(`[${traceId}] No comments found for postId id: `, post.postId);
            throw new common_1.NotFoundException(`[${traceId}] No posts found for post id: `, post.postId);
        }
        await this.saveComments(comments, traceId);
        this.logger.log(`[${traceId}] Comment saved successfully for postId id: `, post.postId);
        return {
            message: "Comment saved successfully",
            traceId,
        };
    }
    async saveComments(comments, traceId) {
        for (const comment of comments) {
            await this.createCommentUseCase.execute(comment, traceId);
        }
    }
};
exports.GetInstagramCommentsUseCase = GetInstagramCommentsUseCase;
exports.GetInstagramCommentsUseCase = GetInstagramCommentsUseCase = GetInstagramCommentsUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [instagram_client_repository_1.InstagramRepository,
        create_comment_use_case_1.CreateCommentUseCase])
], GetInstagramCommentsUseCase);
//# sourceMappingURL=get-instagram-commets-by-post-id.usecase.js.map