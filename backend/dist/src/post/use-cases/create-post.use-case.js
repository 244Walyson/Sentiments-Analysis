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
var CreatePostUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostUseCase = void 0;
const common_1 = require("@nestjs/common");
const response_post_dto_1 = require("../dto/response-post.dto");
const post_entity_1 = require("../entities/post.entity");
let CreatePostUseCase = CreatePostUseCase_1 = class CreatePostUseCase {
    constructor(postRepository, rabbitMqService) {
        this.postRepository = postRepository;
        this.rabbitMqService = rabbitMqService;
        this.logger = new common_1.Logger(CreatePostUseCase_1.name);
    }
    async execute(createPostDto, traceId) {
        try {
            traceId = traceId || crypto.randomUUID();
            this.logger.log(`[${traceId}] Creating post for company id: ${createPostDto.companyId}`);
            await this.postRepository.findOne(createPostDto.companyId);
            const post = new post_entity_1.Post({ ...createPostDto });
            const createdPost = await this.postRepository.create(post);
            const response = new response_post_dto_1.ResponsePostDto({ ...createdPost });
            await this.sendPostsToRabbitMQ(response, traceId);
            return response;
        }
        catch (error) {
            this.logger.error(`[${traceId}] Error creating post for userId: ${createPostDto.companyId}`, error);
            throw new common_1.BadRequestException(`[${traceId}] Error creating post`);
        }
    }
    async sendPostsToRabbitMQ(post, traceId) {
        const data = { traceId, ...post };
        await this.rabbitMqService.publish("posts-queue", data, traceId);
    }
};
exports.CreatePostUseCase = CreatePostUseCase;
exports.CreatePostUseCase = CreatePostUseCase = CreatePostUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("PostRepositoryInterface")),
    __param(1, (0, common_1.Inject)("MessageQueue")),
    __metadata("design:paramtypes", [Object, Object])
], CreatePostUseCase);
//# sourceMappingURL=create-post.use-case.js.map