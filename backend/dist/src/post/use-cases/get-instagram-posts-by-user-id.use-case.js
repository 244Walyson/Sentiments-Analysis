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
var GetInstagramPostUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInstagramPostUseCase = void 0;
const common_1 = require("@nestjs/common");
const instagram_client_repository_1 = require("../repositories/instagram-client.repository");
const create_post_use_case_1 = require("./create-post.use-case");
let GetInstagramPostUseCase = GetInstagramPostUseCase_1 = class GetInstagramPostUseCase {
    constructor(instagramClientRepository, createPostUseCase) {
        this.instagramClientRepository = instagramClientRepository;
        this.createPostUseCase = createPostUseCase;
        this.logger = new common_1.Logger(GetInstagramPostUseCase_1.name);
    }
    async execute(userId) {
        const traceId = crypto.randomUUID();
        this.logger.log(`[${traceId}] Getting posts for user id: ${userId}`);
        const accessToken = "IGAB4YHjOso5NBZAE5nbjYxUUl2Mm5vN3pnR2Y3NUhUam4zSEtfVDZAaRmlrbjJ1WXlKN2V3YVhjMjRkM2hKY05xTUZAtNGdkUWZAzcXJkci02WTdtTXR1WDhvZA3VDS3hlVzk1TVhNWktzN1Bqd01mcXF4eURUcDM5eGx3QklOaUN4UDFwSTBEbkFsTmxfMAZDZD";
        let posts;
        try {
            posts = await this.instagramClientRepository.getUserPosts(userId, accessToken);
        }
        catch (error) {
            this.logger.error(`[${traceId}] Error getting posts: }`, error);
            throw new common_1.BadRequestException(`[${traceId}] Error getting posts`);
        }
        if (!posts || posts.length === 0) {
            this.logger.error(`[${traceId}] No posts found for user id: `, userId);
            throw new common_1.NotFoundException(`[${traceId}] No posts found for user id: `, userId);
        }
        await this.savePosts(posts, traceId);
        this.logger.log(`[${traceId}] Posts saved successfully for user id: `, userId);
        return {
            message: "Posts saved successfully",
            traceId,
        };
    }
    async savePosts(posts, traceId) {
        for (const post of posts) {
            await this.createPostUseCase.execute(post);
        }
    }
};
exports.GetInstagramPostUseCase = GetInstagramPostUseCase;
exports.GetInstagramPostUseCase = GetInstagramPostUseCase = GetInstagramPostUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [instagram_client_repository_1.InstagramRepository,
        create_post_use_case_1.CreatePostUseCase])
], GetInstagramPostUseCase);
//# sourceMappingURL=get-instagram-posts-by-user-id.use-case.js.map